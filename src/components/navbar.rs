use leptos::ev;
use leptos::prelude::*;
use leptos_router::components::A;
use leptos_router::hooks::use_location;
use wasm_bindgen::JsCast;
use web_sys::HtmlElement;

use crate::components::LangSwitcher;
use crate::i18n::{I18n, translate};

#[derive(Clone)]
struct NavLink {
    href: &'static str,
    label_key: &'static str,
}

#[component]
fn MobileMenu(
    i18n: I18n,
    is_open: ReadSignal<bool>,
    on_close: Callback<ev::MouseEvent>,
    nav_links: Vec<NavLink>,
    is_active: Callback<&'static str, bool>,
) -> impl IntoView {
    let socials: [(&str, &str); 3] = [
        ("GitHub", "https://github.com/Samujalphukan228"),
        ("Twitter", "https://x.com/samujalphukan"),
        ("Bluesky", "https://bsky.app/profile/samujal.nexxupp.com"),
    ];

    let close_button_ref = NodeRef::<leptos::html::Button>::new();

    Effect::new(move |_| {
        let open = is_open.get();
        if let Some(body) = web_sys::window().and_then(|w| w.document()).and_then(|d| d.body()) {
            if open {
                let _ = body.set_attribute("style", "overflow: hidden;");
            } else {
                let _ = body.remove_attribute("style");
            }
        }
        if open {
            if let Some(btn) = close_button_ref.get() {
                let el: &HtmlElement = btn.unchecked_ref();
                let _ = el.focus();
            }
        }
    });

    on_cleanup(move || {
        if let Some(body) = web_sys::window().and_then(|w| w.document()).and_then(|d| d.body()) {
            let _ = body.remove_attribute("style");
        }
    });

    Effect::new(move |_| {
        if let Some(window) = web_sys::window() {
            let handler =
                wasm_bindgen::closure::Closure::<dyn Fn(ev::KeyboardEvent)>::new(
                    move |e: ev::KeyboardEvent| {
                        if is_open.get_untracked() && e.key() == "Escape" {
                            if let Ok(synthetic) = ev::MouseEvent::new("click") {
                                on_close.run(synthetic);
                            }
                        }
                    },
                );
            let _ = window.add_event_listener_with_callback(
                "keydown",
                handler.as_ref().unchecked_ref(),
            );
            handler.forget();
        }
    });

    let featured = nav_links.first().cloned();
    let rest: Vec<NavLink> = nav_links.iter().skip(1).cloned().collect();

    view! {
        <div
            class="fixed inset-0 z-50"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            style=move || {
                if is_open.get() {
                    "pointer-events: auto; visibility: visible; transition: visibility 0s 0s;"
                } else {
                    "pointer-events: none; visibility: hidden; transition: visibility 0s 0.6s;"
                }
            }
        >
            <div
                class="absolute inset-0"
                style=move || {
                    if is_open.get() {
                        "background: rgba(0,0,0,0.6); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); opacity: 1; transition: opacity 0.4s cubic-bezier(0.16,1,0.3,1);"
                    } else {
                        "background: rgba(0,0,0,0.6); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); opacity: 0; transition: opacity 0.3s ease;"
                    }
                }
                on:click=move |e| on_close.run(e)
            ></div>

            <div
                class="absolute inset-0 bg-black will-change-transform"
                style=move || {
                    if is_open.get() {
                        "clip-path: inset(0 0 0 0); transition: clip-path 0.55s cubic-bezier(0.77,0,0.175,1);"
                    } else {
                        "clip-path: inset(0 0 100% 0); transition: clip-path 0.45s cubic-bezier(0.77,0,0.175,1);"
                    }
                }
            >
                <div class="flex flex-col h-full">
                    <div
                        class="flex items-center justify-between px-5 h-14"
                        style=move || {
                            if is_open.get() {
                                "opacity: 1; transform: translateY(0); transition: opacity 0.35s ease 0.18s, transform 0.5s cubic-bezier(0.16,1,0.3,1) 0.18s;"
                            } else {
                                "opacity: 0; transform: translateY(-8px); transition: opacity 0.12s ease, transform 0.12s ease;"
                            }
                        }
                    >
                        <span style="font-family: 'Geist','Inter',system-ui,sans-serif; font-weight: 600; font-size: 14px; color: #fff;">
                            {move || translate(i18n.locale.get(), "nav.brand")}
                        </span>
                        <button
                            node_ref=close_button_ref
                            on:click=move |e| on_close.run(e)
                            aria-label="Close menu"
                            class="w-8 h-8 rounded-full bg-transparent cursor-pointer flex items-center justify-center text-white hover:bg-white/[0.06]"
                            style="transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1), background 0.2s, border-color 0.2s;"
                        >
                            <svg
                                aria-hidden="true"
                                width="10"
                                height="10"
                                viewBox="0 0 11 11"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.3"
                                stroke-linecap="round"
                            >
                                <path
                                    d="M1 1l9 9M10 1L1 10"
                                    style=move || {
                                        if is_open.get() {
                                            "stroke-dasharray: 13; stroke-dashoffset: 0; transition: stroke-dashoffset 0.35s cubic-bezier(0.16,1,0.3,1) 0.25s;"
                                        } else {
                                            "stroke-dasharray: 13; stroke-dashoffset: 13; transition: stroke-dashoffset 0.15s ease;"
                                        }
                                    }
                                />
                            </svg>
                        </button>
                    </div>

                    <div
                        class="flex-1 p-3 grid grid-cols-2 gap-3 auto-rows-[minmax(88px,auto)]"
                        style="grid-template-rows: 1.4fr 1fr 1fr;"
                    >
                        {featured.map(|link| {
                            let active = is_active.run(link.href);
                            view! {
                                <A
                                    href=i18n.localize(link.href)
                                    on:click=move |e| on_close.run(e)
                                    attr:class="group col-span-2 relative flex flex-col justify-end p-5 rounded-xl bg-[#0a0a0a] no-underline overflow-hidden will-change-transform"
                                    attr:style=move || {
                                        if is_open.get() {
                                            "opacity: 1; transform: translateY(0) scale(1); transition: opacity 0.45s cubic-bezier(0.16,1,0.3,1) 0.1s, transform 0.6s cubic-bezier(0.16,1,0.3,1) 0.1s, border-color 0.25s;"
                                        } else {
                                            "opacity: 0; transform: translateY(30px) scale(0.95); transition: opacity 0.15s ease, transform 0.2s ease;"
                                        }
                                    }
                                >
                                    <span
                                        aria-hidden="true"
                                        class="absolute top-4 right-4 text-white/15 text-[18px] inline-block group-hover:text-white/70"
                                        style="transition: transform 0.45s cubic-bezier(0.34,1.56,0.64,1), color 0.25s;"
                                    >
                                        <span
                                            class="inline-block group-hover:translate-x-1.5 group-hover:-translate-y-1.5"
                                            style="transition: transform 0.45s cubic-bezier(0.34,1.56,0.64,1);"
                                        >
                                            "\u{2197}"
                                        </span>
                                    </span>
                                    <span
                                        class="group-hover:tracking-[0.01em]"
                                        style=move || {
                                            format!(
                                                "font-family:'Geist','Inter',system-ui,sans-serif;font-weight:600;font-size:clamp(30px,9vw,44px);line-height:1;letter-spacing:-0.03em;color:#fff;transition:letter-spacing 0.45s cubic-bezier(0.16,1,0.3,1);"
                                            )
                                        }
                                    >
                                        {move || translate(i18n.locale.get(), link.label_key)}
                                    </span>
                                    <span
                                        class="text-[12px] mt-1.5 group-hover:translate-x-0.5"
                                        style=move || {
                                            let c = if active { "#888" } else { "#555" };
                                            format!(
                                                "color:{};font-family:'Geist','Inter',system-ui,sans-serif;transition:transform 0.3s ease,color 0.2s;",
                                                c
                                            )
                                        }
                                    >
                                        {move || if active {
                                            translate(i18n.locale.get(), "nav.you_are_here")
                                        } else {
                                            translate(i18n.locale.get(), "nav.start_here")
                                        }}
                                    </span>
                                </A>
                            }
                        })}

                        {rest
                            .into_iter()
                            .enumerate()
                            .map(|(i, link)| {
                                let active = is_active.run(link.href);
                                let delay = format!("{:.2}", 0.16 + (i as f64 + 1.0) * 0.07);
                                let tx = if i % 2 == 0 { "-16px" } else { "16px" };
                                let delay_c = delay.clone();
                                let tx_c = tx.to_string();

                                view! {
                                    <A
                                        href=i18n.localize(link.href)
                                        on:click=move |e| on_close.run(e)
                                        attr:class=move || {
                                            if link.href == "/work" {
                                                "group relative flex flex-col justify-between p-4 rounded-xl bg-white no-underline overflow-hidden will-change-transform".to_string()
                                            } else {
                                                "group relative flex flex-col justify-between p-4 rounded-xl bg-[#0a0a0a] no-underline overflow-hidden will-change-transform".to_string()
                                            }
                                        }
                                        attr:style=move || {
                                            if is_open.get() {
                                                format!(
                                                    "opacity:1;transform:translate(0,0) scale(1);transition:opacity 0.45s cubic-bezier(0.16,1,0.3,1) {d}s,transform 0.6s cubic-bezier(0.16,1,0.3,1) {d}s,border-color 0.25s;",
                                                    d = delay_c
                                                )
                                            } else {
                                                format!(
                                                    "opacity:0;transform:translate({tx},24px) scale(0.94);transition:opacity 0.12s ease,transform 0.15s ease;",
                                                    tx = tx_c
                                                )
                                            }
                                        }
                                    >
                                        <div class="flex items-center justify-between">
                                            <span
                                                class="w-1.5 h-1.5 rounded-full"
                                                style=move || if link.href == "/work" {
                                                    "background:#000;"
                                                } else if active {
                                                    "background:#fff;"
                                                } else {
                                                    "background:#333;"
                                                }
                                            ></span>
                                            <span
                                                aria-hidden="true"
                                                class=move || if link.href == "/work" { "text-black/30 text-[15px] inline-block group-hover:text-black/60" } else { "text-white/15 text-[15px] inline-block group-hover:text-white/70" }
                                                style=move || if link.href == "/work" { "transition: color 0.25s;" } else { "transition: color 0.25s;" }
                                            >
                                                <span
                                                    class="inline-block group-hover:translate-x-1 group-hover:-translate-y-1"
                                                    style="transition: transform 0.45s cubic-bezier(0.34,1.56,0.64,1);"
                                                >
                                                    "\u{2197}"
                                                </span>
                                            </span>
                                        </div>
                                        <span
                                            class="group-hover:tracking-[0.005em]"
                                            style=move || {
                                                let c = if link.href == "/work" { "#000" } else { "#fff" };
                                                format!(
                                                    "font-family:'Geist','Inter',system-ui,sans-serif;font-weight:600;font-size:22px;line-height:1;letter-spacing:-0.02em;color:{};transition:letter-spacing 0.4s cubic-bezier(0.16,1,0.3,1);",
                                                    c
                                                )
                                            }
                                        >
                                            {move || translate(i18n.locale.get(), link.label_key)}
                                        </span>
                                    </A>
                                }
                            })
                            .collect_view()}

                        <a
                            href="https://github.com/Samujalphukan228"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="group relative flex flex-col justify-between p-4 rounded-xl bg-[#0a0a0a] no-underline overflow-hidden will-change-transform"
                            style=move || {
                                if is_open.get() {
                                    "opacity:1;transform:translate(0,0) scale(1);transition:opacity 0.45s cubic-bezier(0.16,1,0.3,1) 0.41s,transform 0.6s cubic-bezier(0.16,1,0.3,1) 0.41s;"
                                } else {
                                    "opacity:0;transform:translate(0,24px) scale(0.94);transition:opacity 0.12s ease,transform 0.15s ease;"
                                }
                            }
                        >
                            <div class="flex items-center justify-between">
                                <span
                                    class="w-1.5 h-1.5 rounded-full"
                                    style="background:#333;"
                                ></span>
                                <span
                                    aria-hidden="true"
                                    class="text-white/15 text-[15px] inline-block group-hover:text-white/70"
                                    style="transition: color 0.25s;"
                                >
                                    <span
                                        class="inline-block group-hover:translate-x-1 group-hover:-translate-y-1"
                                        style="transition: transform 0.45s cubic-bezier(0.34,1.56,0.64,1);"
                                    >
                                        "\u{2197}"
                                    </span>
                                </span>
                            </div>
                            <span
                                class="text-[22px] leading-none tracking-[-0.02em] font-[600] text-white"
                                style="font-family:'Geist','Inter',system-ui,sans-serif;"
                            >
                                "GitHub"
                            </span>
                        </a>
                    </div>

                    <div
                        class="flex items-center justify-between px-5 py-4"
                        style=move || {
                            if is_open.get() {
                                "opacity:1;transform:translateY(0);transition:opacity 0.35s ease 0.38s,transform 0.5s cubic-bezier(0.16,1,0.3,1) 0.38s;"
                            } else {
                                "opacity:0;transform:translateY(8px);transition:opacity 0.1s ease,transform 0.1s ease;"
                            }
                        }
                    >
                        <span
                            class="text-[12px] text-[#555]"
                            style="font-family:'Geist','Inter',system-ui,sans-serif;"
                        >
                            "\u{a9} 2025"
                        </span>
                        <div class="flex items-center gap-5">
                            {socials
                                .iter()
                                .enumerate()
                                .map(|(si, (name, href))| {
                                    let d = format!("{:.2}", 0.4 + si as f64 * 0.05);
                                    let d_c = d.clone();
                                    view! {
                                        <a
                                            href=*href
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            class="text-[12px] text-[#666] hover:text-white no-underline"
                                            style=move || {
                                                if is_open.get() {
                                                    format!(
                                                        "font-family:'Geist','Inter',system-ui,sans-serif;opacity:1;transform:translateY(0);transition:opacity 0.3s ease {d}s,transform 0.4s cubic-bezier(0.16,1,0.3,1) {d}s,color 0.2s;",
                                                        d = d_c
                                                    )
                                                } else {
                                                    "font-family:'Geist','Inter',system-ui,sans-serif;opacity:0;transform:translateY(4px);transition:opacity 0.08s ease,transform 0.08s ease,color 0.2s;".to_string()
                                                }
                                            }
                                        >
                                            {*name}
                                        </a>
                                    }
                                })
                                .collect_view()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

#[component]
pub fn Navbar() -> impl IntoView {
    let i18n = I18n::use_ctx();
    let location = use_location();
    let (menu_open, set_menu_open) = signal(false);

    let nav_links = vec![
        NavLink { href: "/", label_key: "nav.home" },
        NavLink { href: "/work", label_key: "nav.work" },
        NavLink { href: "/contact", label_key: "nav.contact" },
    ];

    let mobile_nav_links = nav_links.clone();

    let is_active = Callback::new(move |href: &'static str| -> bool {
        let (stripped, _) = crate::i18n::strip_locale_prefix(&location.pathname.get());
        stripped == href
    });

    let toggle_menu = move |_: ev::MouseEvent| {
        set_menu_open.update(|v| *v = !*v);
    };

    let close_menu = move |_: ev::MouseEvent| {
        set_menu_open.set(false);
    };

    view! {
        <MobileMenu
            i18n=i18n
            is_open=menu_open
            on_close=Callback::new(close_menu)
            nav_links=mobile_nav_links
            is_active=is_active
        />

        <nav
            class="fixed top-0 left-0 right-0 z-40 h-[52px] flex items-center px-5"
            style="background:rgba(0,0,0,0.85);backdrop-filter:blur(16px) saturate(180%);-webkit-backdrop-filter:blur(16px) saturate(180%);"
        >
            <div class="flex-1">
                <button
                    on:click=toggle_menu
                    aria-label="Toggle menu"
                    attr:aria-expanded=move || menu_open.get().to_string()
                    attr:aria-haspopup="dialog"
                    class="bg-none border-none cursor-pointer w-9 h-9 rounded-md flex items-center justify-center hover:bg-white/[0.06]"
                    style="transition:transform 0.35s cubic-bezier(0.34,1.56,0.64,1),background 0.2s;"
                >
                    <div class="flex flex-col gap-[4.5px] w-[16px]">
                        {move || (0..3)
                            .map(|i| {
                                let open = menu_open.get();
                                let (w, transform, opacity) = if open {
                                    match i {
                                        0 => ("16px", "translateY(6px) rotate(45deg)", "1"),
                                        1 => ("16px", "scaleX(0)", "0"),
                                        _ => ("16px", "translateY(-6px) rotate(-45deg)", "1"),
                                    }
                                } else {
                                    match i {
                                        1 => ("10px", "none", "1"),
                                        _ => ("16px", "none", "1"),
                                    }
                                };
                                let delay = match i {
                                    0 => "0s",
                                    1 => "0.03s",
                                    _ => "0.06s",
                                };
                                view! {
                                    <span
                                        class="block h-[1.5px] rounded-[1px] bg-white origin-center will-change-transform"
                                        style=format!(
                                            "width:{};transform:{};opacity:{};transition:transform 0.35s cubic-bezier(0.34,1.56,0.64,1) {},opacity 0.2s ease {},width 0.3s cubic-bezier(0.16,1,0.3,1) {};",
                                            w, transform, opacity, delay, delay, delay
                                        )
                                    ></span>
                                }
                            })
                            .collect_view()}
                    </div>
                </button>
            </div>

            <div class="absolute left-1/2 -translate-x-1/2">
                <A
                    href=i18n.localize("/")
                    attr:class="no-underline"
                    attr:style="font-family:'Geist','Inter',system-ui,sans-serif;font-weight:600;font-size:15px;letter-spacing:-0.01em;color:#fff;"
                >
                    {move || translate(i18n.locale.get(), "nav.brand")}
                </A>
            </div>

            <div class="flex-1 flex justify-end items-center gap-2">
                <LangSwitcher />
                <a
                    href="https://github.com/Samujalphukan228"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center gap-[6px] text-[12px] font-[500] tracking-[0.01em] text-white no-underline px-3.5 py-[6px] rounded-md bg-[#151515] hover:bg-[#1e1e1e]"
                    style="font-family:'Geist','Inter',system-ui,sans-serif;transition:background 0.2s;"
                >
                    <span>{move || translate(i18n.locale.get(), "nav.github")}</span>
                </a>
            </div>
        </nav>

        <div style="height:52px"></div>
    }
}
