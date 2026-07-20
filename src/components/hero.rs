use leptos::prelude::*;
use leptos_router::components::A;

use crate::i18n::{I18n, translate};

const STACK: &[&str] = &[
    "Rust", "Tokio", "Axum", "LLM Agents", "PostgreSQL", "Docker", "AI",
];

#[component]
pub fn Hero() -> impl IntoView {
    let i18n = I18n::use_ctx();

    view! {
        <section class="relative w-full min-h-[100dvh] bg-black overflow-hidden selection:bg-white/20 selection:text-white">

            <div class="relative z-10 w-full mx-auto px-5 sm:px-8 lg:px-10 flex flex-col min-h-[100dvh]">

                <div class="flex-1 flex flex-col justify-center py-16 sm:py-20 lg:py-24">

                    <div class="h-up flex flex-col lg:flex-row lg:items-end lg:justify-between lg:gap-12" style="animation-delay:0.06s">

                        <div>
                            <h1>
                                <span
                                    class="block text-white"
                                    style="font-family:'Geist','Inter',system-ui,sans-serif; font-weight:700; font-size:clamp(3rem,11vw,6.5rem); line-height:0.9; letter-spacing:-0.045em;"
                                >
                                    {move || translate(i18n.locale.get(), "hero.samujal")}
                                </span>
                                <span
                                    class="block text-transparent bg-clip-text bg-gradient-to-b from-neutral-500 to-neutral-800 mt-1 sm:mt-1.5"
                                    style="font-family:'Geist','Inter',system-ui,sans-serif; font-weight:700; font-size:clamp(3rem,11vw,6.5rem); line-height:0.9; letter-spacing:-0.045em;"
                                >
                                    {move || translate(i18n.locale.get(), "hero.phukan")}
                                </span>
                            </h1>
                        </div>

                        <div class="mt-6 lg:mt-0 lg:max-w-sm lg:pb-2">
                            <p style="font-family:'Geist','Inter',system-ui,sans-serif; font-size:clamp(0.875rem,2vw,0.975rem); line-height:1.7; color:#777;">
                                {move || translate(i18n.locale.get(), "hero.tagline")}
                            </p>

                            <div class="mt-6 flex flex-col min-[420px]:flex-row gap-3">
                                <A
                                    href=i18n.localize("/work")
                                    attr:class="group inline-flex items-center justify-center gap-2 h-11 px-7 bg-white text-black rounded-xl text-[13px] font-semibold no-underline hover:bg-neutral-200 transition-colors duration-200"
                                    attr:style="font-family:'Geist','Inter',system-ui,sans-serif;"
                                >
                                    {move || translate(i18n.locale.get(), "hero.view_work")}
                                    <span
                                        class="inline-block"
                                        aria-hidden="true"
                                    >"\u{2192}"</span>
                                </A>
                                <a
                                    href="mailto:samujalphukan@yahoo.com"
                                    class="inline-flex items-center justify-center h-11 px-7 text-[13px] font-medium text-neutral-300 border border-white/10 rounded-xl no-underline hover:border-white/20 hover:bg-white/[0.04] transition-all duration-200"
                                    style="font-family:'Geist','Inter',system-ui,sans-serif;"
                                >
                                    {move || translate(i18n.locale.get(), "hero.contact")}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    class="h-up grid grid-cols-2 lg:grid-cols-4 gap-3"
                    style="animation-delay:0.2s"
                >

                    <div
                        class="col-span-2 relative flex flex-col justify-between p-5 sm:p-6 rounded-xl bg-[#0a0a0a] overflow-hidden min-h-[120px]"
                    >
                        <span
                            class="block mb-4"
                            style="font-family:'Geist Mono',monospace; font-size:10px; letter-spacing:0.1em; text-transform:uppercase; color:#444;"
                        >{move || translate(i18n.locale.get(), "hero.stack_label")}</span>
                        <div class="flex flex-wrap gap-1.5 sm:gap-2">
                            {STACK.iter().map(|t| view! {
                                <span
                                    style="font-family:'Geist Mono',monospace; font-size:10px; color:#777; padding:4px 10px; border-radius:6px; background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.05); white-space:nowrap;"
                                >
                                    {*t}
                                </span>
                            }).collect_view()}
                        </div>
                    </div>

                    <div
                        class="col-span-1 relative flex flex-col justify-between p-5 sm:p-6 rounded-xl bg-[#0a0a0a] overflow-hidden min-h-[110px] sm:min-h-[130px]"
                    >
                        <div class="flex items-center justify-between">
                            <span
                                style="font-family:'Geist Mono',monospace; font-size:10px; letter-spacing:0.1em; text-transform:uppercase; color:#444;"
                            >{move || translate(i18n.locale.get(), "hero.location_label")}</span>
                            <span
                                class="w-1.5 h-1.5 rounded-full"
                                style="background:#333;"
                            ></span>
                        </div>
                        <div>
                            <span
                                class="block text-[#ededed]"
                                style="font-family:'Geist','Inter',system-ui,sans-serif; font-weight:600; font-size:22px; letter-spacing:-0.02em; line-height:1;"
                            >{move || translate(i18n.locale.get(), "hero.location_value")}</span>
                        </div>
                    </div>

                    <a
                        href="https://github.com/Samujalphukan228"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="col-span-1 relative flex flex-col justify-between p-5 sm:p-6 rounded-xl bg-white overflow-hidden min-h-[110px] sm:min-h-[130px] no-underline group hover:brightness-[0.97] transition-[filter] duration-200"
                    >
                        <svg
                            aria-hidden="true"
                            class="self-end text-black"
                            width="14" height="14"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                        >
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                        </svg>
                        <div>
                            <span
                                class="block text-black"
                                style="font-family:'Geist','Inter',system-ui,sans-serif; font-weight:600; font-size:22px; letter-spacing:-0.02em; line-height:1;"
                            >"GitHub"</span>
                        </div>
                    </a>

                    <div
                        class="col-span-2 lg:col-span-4 relative flex flex-col p-5 sm:p-6 rounded-xl bg-[#0a0a0a] overflow-hidden"
                    >
                        <span
                            class="block mb-4"
                            style="font-family:'Geist Mono',monospace; font-size:10px; letter-spacing:0.1em; text-transform:uppercase; color:#444;"
                        >{move || translate(i18n.locale.get(), "hero.connect_label")}</span>
                        <div class="flex flex-wrap items-center gap-x-6 sm:gap-x-8 gap-y-2">
                            {[
                                ("GitHub",    "https://github.com/Samujalphukan228"),
                                ("Twitter",   "https://x.com/samujalphukan"),
                                ("Bluesky",  "https://bsky.app/profile/samujal.nexxupp.com"),
                            ].into_iter().map(|(name, href)| view! {
                                <a
                                    href=href
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="group/s inline-flex items-center gap-1.5 no-underline transition-colors duration-200"
                                    style="font-family:'Geist','Inter',system-ui,sans-serif; font-size:13px; font-weight:500; color:#666;"
                                >
                                    <span class="group-hover/s:text-white transition-colors duration-200">
                                        {name}
                                    </span>
                                    <span
                                        class="text-[10px] text-neutral-700 group-hover/s:text-white/50 transition-colors duration-200"
                                        aria-hidden="true"
                                    >"\u{2197}"</span>
                                </a>
                            }).collect_view()}
                        </div>
                    </div>
                </div>

                <div class="pt-10 sm:pt-14">
                    <div class="flex items-center justify-between pb-6 sm:pb-8">
                        <span style="font-family:'Geist Mono',monospace; font-size:10px; letter-spacing:0.04em; color:#333;">
                            {move || translate(i18n.locale.get(), "hero.copyright")}
                        </span>
                        <span style="font-family:'Geist Mono',monospace; font-size:10px; letter-spacing:0.04em; color:#333;">
                            {move || translate(i18n.locale.get(), "hero.footer")}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    }
}
