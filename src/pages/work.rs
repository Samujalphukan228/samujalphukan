use leptos::prelude::*;

use crate::i18n::{I18n, translate};

#[derive(Clone, Copy)]
struct Project {
    name: &'static str,
    description: &'static str,
    url: &'static str,
    tags: &'static [&'static str],
    year: &'static str,
    status: &'static str,
}

#[component]
pub fn WorkPage() -> impl IntoView {
    let i18n = I18n::use_ctx();

    let projects = vec![
        Project {
            name: "jump-cli",
            description: "Fast fuzzy directory navigation tool for the terminal, enabling instant access to frequently used folders with an intuitive CLI.",
            url: "https://jump-livid-gamma.vercel.app/",
            tags: &["Rust", "CLI", "Terminal"],
            year: "2026",
            status: "Live",
        },
        Project {
            name: "ezjobs",
            description: "Persistent background job processing for Rust with scheduling, retries, dead-letter queues, priorities, metrics, and database-backed workers.",
            url: "https://ezjobs-web.vercel.app/",
            tags: &["Rust", "Background Jobs", "SQLx"],
            year: "2026",
            status: "Live",
        },
        Project {
            name: "ezroutes",
            description: "Lightweight, ergonomic routing library for Rust that simplifies HTTP route registration with clean, modular APIs.",
            url: "https://ezroutes-web.vercel.app/",
            tags: &["Rust", "Routing", "HTTP"],
            year: "2026",
            status: "Live",
        },
        Project {
            name: "fetchy",
            description: "Modern, ergonomic HTTP client for Rust with a developer-friendly API for REST requests, JSON handling, and networking.",
            url: "https://fetchy-web-two.vercel.app/",
            tags: &["Rust", "HTTP", "REST API"],
            year: "2026",
            status: "Live",
        },
        Project {
            name: "ezconfig",
            description: "Type-safe configuration library for Rust with environment variable support, layered configuration, and simple application setup.",
            url: "https://ezconfig-web.vercel.app/",
            tags: &["Rust", "Configuration", "Environment"],
            year: "2026",
            status: "Live",
        },
        Project {
            name: "agent",
            description: "AI agent framework for Rust that enables autonomous workflows, tool execution, memory management, and multi-step task orchestration.",
            url: "https://github.com/Samujalphukan228/agent",
            tags: &["Rust", "AI", "Agents"],
            year: "2026",
            status: "Open Source",
        },
    ];

    let count = projects.len();
    let indexed: Vec<(usize, Project)> = projects.into_iter().enumerate().collect();

    let card = move |i: usize, p: Project, featured: bool| {
        let delay = format!("animation-delay:{}s", 0.3 + i as f64 * 0.12);

        let is_white = i == 2;

        let wrapper_class = format!(
            "group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.06] no-underline {} {} {}",
            if is_white { "bg-white" } else { "bg-white/[0.015] hover:bg-white/[0.025] transition-colors duration-500" },
            if featured { "lg:col-span-4 lg:row-span-2" } else { "lg:col-span-2 lg:row-span-1" },
            if featured { "p-8 sm:p-10 lg:p-12" } else { "p-6 sm:p-8" },
        );

        let ghost_style = format!(
            "position:absolute; z-index:0; right:{}; bottom:{}; font-family:'Geist Mono',monospace; font-weight:800; line-height:0.75; {} font-size:{}; user-select:none; pointer-events:none;",
            if featured { "-0.03em" } else { "-0.04em" },
            if featured { "-0.06em" } else { "-0.08em" },
            if is_white { "color:rgba(0,0,0,0.04);" } else { "color:rgba(255,255,255,0.025);" },
            if featured { "clamp(7rem,13vw,12rem)" } else { "clamp(4.5rem,9vw,6.5rem)" },
        );

        let title_style = format!(
            "font-family:'Geist','Inter',system-ui,sans-serif; font-weight:600; letter-spacing:-0.025em; font-size:{};",
            if featured { "clamp(1.6rem,3.4vw,2.5rem)" } else { "clamp(1.15rem,2.2vw,1.45rem)" },
        );

        let desc_style = format!(
            "font-family:'Geist','Inter',system-ui,sans-serif; font-size:13.5px; line-height:1.7; {} display:-webkit-box; -webkit-line-clamp:{}; -webkit-box-orient:vertical; overflow:hidden;",
            if is_white { "color:#333;" } else { "color:#5a5a5a;" },
            if featured { 3 } else { 2 },
        );

        let meta_style = format!("font-family:'Geist Mono',monospace; font-size:11px; {};", if is_white { "color:#555" } else { "color:#3e3e3e" });

        let tag_count = if featured { 3 } else { 2 };

        view! {
            <a href=p.url target="_blank" rel="noopener noreferrer" class=wrapper_class style=delay>
                <span style=ghost_style aria-hidden="true">{format!("{:02}", i + 1)}</span>

                <div class="relative z-10 flex flex-col h-full">
                    <div class="flex items-center gap-2.5 mb-5 lg:mb-6">
                        <span
                            style=move || {
                                if is_white {
                                    format!(
                                        "font-family:'Geist Mono',monospace; font-size:9px; letter-spacing:0.08em; text-transform:uppercase; color:#333; padding:3px 8px; border-radius:6px; border:1px solid rgba(0,0,0,0.08); background:rgba(0,0,0,0.03);"
                                    )
                                } else {
                                    format!(
                                        "font-family:'Geist Mono',monospace; font-size:9px; letter-spacing:0.08em; text-transform:uppercase; color:#4a4a4a; padding:3px 8px; border-radius:6px; border:1px solid rgba(255,255,255,0.06); background:rgba(255,255,255,0.02);"
                                    )
                                }
                            }
                        >
                            {move || if p.status == "Live" {
                                translate(i18n.locale.get(), "work.status_live")
                            } else {
                                translate(i18n.locale.get(), "work.status_open_source")
                            }}
                        </span>
                        <span style=meta_style.clone()>{p.year}</span>
                    </div>

                    <h3
                        style=title_style
                        class=if is_white { "text-black/90 mb-3" } else { "text-white/90 mb-3" }
                    >
                        {p.name}
                    </h3>

                    <p style=desc_style class="mb-6 flex-1">{p.description}</p>

                    <div class="flex flex-wrap items-center gap-1.5 mt-auto">
                        {p.tags.iter().take(tag_count).map(|tag| view! {
                            <span
                                style=move || {
                                    if is_white {
                                        "font-family:'Geist Mono',monospace; font-size:9.5px; letter-spacing:0.02em; color:#444; padding:3px 8px; border-radius:5px; background:rgba(0,0,0,0.03); border:1px solid rgba(0,0,0,0.06); white-space:nowrap;"
                                    } else {
                                        "font-family:'Geist Mono',monospace; font-size:9.5px; letter-spacing:0.02em; color:#555; padding:3px 8px; border-radius:5px; background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.05); white-space:nowrap;"
                                    }
                                }
                            >
                                {*tag}
                            </span>
                        }).collect_view()}
                    </div>
                </div>

                <span
                    class=if is_white { "absolute right-5 bottom-5 lg:right-8 lg:bottom-8 z-10 text-black/40" } else { "absolute right-5 bottom-5 lg:right-8 lg:bottom-8 z-10 text-neutral-700" }
                    style="font-size:15px;"
                    aria-hidden="true"
                >"\u{2197}"</span>
            </a>
        }
    };

    view! {
        <section class="relative w-full min-h-[100dvh] bg-[#000000] overflow-hidden selection:bg-white/15 selection:text-white">

            <div class="relative z-10 w-full max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 flex flex-col min-h-[100dvh]">

                <div class="pt-24 sm:pt-32 lg:pt-40 pb-12 sm:pb-16 lg:pb-20">
                    <div class="h-up flex flex-col lg:flex-row lg:items-end lg:justify-between lg:gap-16" style="animation-delay:0.08s">
                        <div>
                            <span
                                class="block mb-5 sm:mb-6"
                                style="font-family:'Geist Mono',monospace; font-size:10px; letter-spacing:0.12em; text-transform:uppercase; color:#3a3a3a;"
                            >{move || translate(i18n.locale.get(), "work.kicker")}</span>
                            <h1>
                                <span
                                    class="block text-white/95"
                                    style="font-family:'Geist','Inter',system-ui,sans-serif; font-weight:700; font-size:clamp(2.8rem,9vw,5.8rem); line-height:0.88; letter-spacing:-0.045em;"
                                >
                                    {move || translate(i18n.locale.get(), "work.title_line1")}
                                </span>
                                <span
                                    class="block text-transparent bg-clip-text bg-gradient-to-b from-neutral-500 to-neutral-800 mt-1.5 sm:mt-2"
                                    style="font-family:'Geist','Inter',system-ui,sans-serif; font-weight:700; font-size:clamp(2.8rem,9vw,5.8rem); line-height:0.88; letter-spacing:-0.045em;"
                                >
                                    {move || translate(i18n.locale.get(), "work.title_line2")}
                                </span>
                            </h1>
                        </div>

                        <div class="mt-8 lg:mt-0 lg:max-w-sm lg:pb-3">
                            <p style="font-family:'Geist','Inter',system-ui,sans-serif; font-size:clamp(0.875rem,2vw,0.95rem); line-height:1.75; color:#666;">
                                {move || translate(i18n.locale.get(), "work.description")}
                            </p>
                            <span
                                class="inline-block mt-5"
                                style="font-family:'Geist Mono',monospace; font-size:10px; letter-spacing:0.1em; text-transform:uppercase; color:#3a3a3a;"
                            >
                                {move || {
                                    let t = translate(i18n.locale.get(), "work.count_label");
                                    t.replace("{count}", &count.to_string())
                                }}
                            </span>
                        </div>
                    </div>
                </div>

                <div class="flex-1 flex flex-col gap-3 sm:gap-4">
                    {indexed
                        .chunks(3)
                        .map(|chunk| {
                            let (i0, p0) = chunk[0];
                            let second = chunk.get(1).copied();
                            let third = chunk.get(2).copied();
                            view! {
                                <div
                                    class="h-up grid grid-cols-1 lg:grid-cols-6 lg:grid-rows-2 gap-3 lg:gap-3"
                                    style="animation-delay:0.35s"
                                >
                                {card(i0, p0, true)}
                                {second.map(|(i, p)| card(i, p, false))}
                                {third.map(|(i, p)| card(i, p, false))}
                                </div>
                            }
                        })
                        .collect_view()}
                </div>

                <div class="pt-14 sm:pt-20">
                    <div class="flex items-center justify-between pb-8 sm:pb-10">
                        <span style="font-family:'Geist Mono',monospace; font-size:10px; letter-spacing:0.04em; color:#2a2a2a;">
                            {move || translate(i18n.locale.get(), "work.copyright")}
                        </span>
                        <span style="font-family:'Geist Mono',monospace; font-size:10px; letter-spacing:0.04em; color:#2a2a2a;">
                            {move || translate(i18n.locale.get(), "work.footer")}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    }
}
