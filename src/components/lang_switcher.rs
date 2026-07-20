use leptos::ev;
use leptos::html::Div;
use leptos::leptos_dom::helpers::window_event_listener_untyped;
use leptos::prelude::*;
use leptos_router::hooks::{use_location, use_navigate};
use wasm_bindgen::JsCast;

use crate::i18n::{I18n, Locale, save_locale, switch_locale_path, translate};

#[component]
fn GlobeIcon(#[prop(optional, into)] class: String) -> impl IntoView {
    view! {
        <svg
            class=class
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.75"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
        >
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
            <path d="M2 12h20"/>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
    }
}

#[component]
fn CheckIcon() -> impl IntoView {
    view! {
        <svg
            class="w-3 h-3 shrink-0"
            style="color:#ccc;"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.25"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
        >
            <path d="M20 6 9 17l-5-5"/>
        </svg>
    }
}

#[component]
pub fn LangSwitcher() -> impl IntoView {
    let i18n = I18n::use_ctx();
    let location = use_location();
    let navigate = use_navigate();
    let (open, set_open) = signal(false);
    let root_ref = NodeRef::<Div>::new();

    let switch_to = Callback::new(move |locale: Locale| {
        let path = switch_locale_path(&location.pathname.get(), locale);
        save_locale(locale);
        i18n.locale.set(locale);
        set_open.set(false);
        let _ = navigate(&path, Default::default());
    });

    Effect::new(move |_| {
        let _ = location.pathname.get();
        set_open.set(false);
    });

    Effect::new(move |_| {
        if !open.get() {
            return;
        }

        let root = root_ref.get_untracked();

        let pointer_handle = window_event_listener_untyped("pointerdown", move |ev| {
            let Some(target) = ev.target() else {
                set_open.set(false);
                return;
            };
            let Some(target_node) = target.dyn_ref::<web_sys::Node>() else {
                set_open.set(false);
                return;
            };
            if let Some(root_el) = root.as_ref() {
                if root_el.contains(Some(target_node)) {
                    return;
                }
            }
            set_open.set(false);
        });

        let key_handle = window_event_listener_untyped("keydown", move |ev| {
            if let Some(key_ev) = ev.dyn_ref::<web_sys::KeyboardEvent>() {
                if key_ev.key() == "Escape" {
                    set_open.set(false);
                }
            }
        });

        on_cleanup(move || {
            pointer_handle.remove();
            key_handle.remove();
        });
    });

    view! {
        <div class="relative shrink-0" node_ref=root_ref>
            <button
                type="button"
                class=move || format!(
                    "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1.5 min-h-[32px] text-[12px] font-medium tracking-tight text-white/70 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/25 {}",
                    if open.get() { "bg-white/[0.08]" } else { "hover:bg-white/[0.06]" }
                )
                aria-label=move || translate(i18n.locale.get(), "nav.lang")
                aria-expanded=move || open.get().to_string()
                aria-haspopup="listbox"
                on:click=move |e: ev::MouseEvent| {
                    e.stop_propagation();
                    set_open.update(|v| *v = !*v);
                }
            >
                <GlobeIcon class="shrink-0".to_string()/>
                <span class="font-mono text-[10px] font-semibold tracking-[0.08em] text-white/80 uppercase">
                    {move || i18n.locale.get().short_code()}
                </span>
            </button>

            <Show when=move || open.get()>
                <div class="absolute z-[60] end-0 top-full pt-2">
                    <div class="relative w-[min(196px,calc(100vw-2.5rem))] bg-[#111] border border-white/[0.08] rounded-xl overflow-hidden">
                        <div class="px-3 pt-2.5 pb-2">
                            <span class="text-[9px] font-semibold uppercase tracking-[0.14em] text-white/40">
                                {move || translate(i18n.locale.get(), "nav.lang")}
                            </span>
                        </div>
                        <div
                            role="listbox"
                            class="max-h-[min(240px,50dvh)] overflow-y-auto px-1.5 pb-1.5"
                        >
                            {Locale::ALL
                                .into_iter()
                                .map(|locale| {
                                    let is_active = move || i18n.locale.get() == locale;
                                    view! {
                                        <button
                                            type="button"
                                            role="option"
                                            aria-selected=move || is_active().to_string()
                                            class=move || format!(
                                                "flex items-center gap-2 w-full text-start px-2.5 py-2 rounded-[10px] text-[13px] tracking-tight transition-all duration-150 {}",
                                                if is_active() {
                                                    "bg-white/[0.06] text-white font-medium"
                                                } else {
                                                    "text-white/60 hover:text-white hover:bg-white/[0.04]"
                                                }
                                            )
                                            on:click=move |_| switch_to.run(locale)
                                        >
                                            <span class="w-3.5 shrink-0 flex items-center justify-center">
                                                <Show when=is_active fallback=|| view! { <span class="w-3 h-3"></span> }>
                                                    <CheckIcon/>
                                                </Show>
                                            </span>
                                            <span class="flex-1 min-w-0 truncate">
                                                {move || translate(i18n.locale.get(), locale.lang_key())}
                                            </span>
                                            <span class="font-mono text-[9px] font-semibold tracking-[0.1em] uppercase text-white/30">
                                                {locale.short_code()}
                                            </span>
                                        </button>
                                    }
                                })
                                .collect_view()}
                        </div>
                    </div>
                </div>
            </Show>
        </div>
    }
}
