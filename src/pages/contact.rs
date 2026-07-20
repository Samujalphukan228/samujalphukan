use leptos::prelude::*;

use crate::i18n::{I18n, translate};

struct Social {
    label: &'static str,
    href: &'static str,
}

#[component]
pub fn ContactPage() -> impl IntoView {
    let i18n = I18n::use_ctx();

    let socials = [
        Social { label: "GitHub", href: "https://github.com/Samujalphukan228" },
        Social { label: "Twitter", href: "https://x.com/samujalphukan" },
        Social { label: "Bluesky", href: "https://bsky.app/profile/samujal.nexxupp.com" },
    ];

    view! {
        <section class="relative w-full min-h-[100dvh] bg-black overflow-hidden selection:bg-white/20 selection:text-white">

            <div class="relative z-10 w-full mx-auto px-5 sm:px-8 lg:px-10 flex flex-col min-h-[100dvh]">

                <div class="flex-1 flex flex-col justify-center py-16 sm:py-20 lg:py-24">

                    <div class="h-up flex flex-col lg:flex-row lg:items-end lg:justify-between lg:gap-12" style="animation-delay:0.06s">

                        <div>
                            <h1>
                                <span
                                    class="block text-white"
                                    style="font-family:'Geist','Inter',system-ui,sans-serif; font-weight:700; font-size:clamp(2.6rem,9vw,5.5rem); line-height:0.9; letter-spacing:-0.045em;"
                                >
                                    {move || translate(i18n.locale.get(), "contact.title_line1")}
                                </span>
                                <span
                                    class="block text-transparent bg-clip-text bg-gradient-to-b from-neutral-500 to-neutral-800 mt-1 sm:mt-1.5"
                                    style="font-family:'Geist','Inter',system-ui,sans-serif; font-weight:700; font-size:clamp(2.6rem,9vw,5.5rem); line-height:0.9; letter-spacing:-0.045em;"
                                >
                                    {move || translate(i18n.locale.get(), "contact.title_line2")}
                                </span>
                            </h1>

                            <p
                                class="mt-5 sm:mt-7 max-w-md"
                                style="font-family:'Geist','Inter',system-ui,sans-serif; font-size:clamp(0.875rem,2vw,0.975rem); line-height:1.7; color:#777;"
                            >
                                {move || translate(i18n.locale.get(), "contact.description")}
                            </p>
                        </div>

                        <div class="mt-8 lg:mt-0 lg:max-w-sm lg:pb-2">

                            <span
                                class="block mb-2"
                                style="font-family:'Geist Mono',monospace; font-size:10px; letter-spacing:0.1em; text-transform:uppercase; color:#444;"
                            >{move || translate(i18n.locale.get(), "contact.email_label")}</span>
                            <a
                                href="mailto:samujalphukan@yahoo.com"
                                class="group/e inline-flex items-center gap-2 no-underline"
                            >
                                <span
                                    class="text-white group-hover/e:text-neutral-400 transition-colors duration-200"
                                    style="font-family:'Geist','Inter',system-ui,sans-serif; font-weight:600; font-size:clamp(0.95rem,2.5vw,1.15rem); letter-spacing:-0.02em;"
                                >"samujalphukan@yahoo.com"</span>
                                <span
                                    class="text-[10px] text-neutral-700 group-hover/e:text-white/50 transition-colors duration-200"
                                    aria-hidden="true"
                                >"\u{2197}"</span>
                            </a>

                            <div class="mt-8">
                                <span
                                    class="block mb-3"
                                    style="font-family:'Geist Mono',monospace; font-size:10px; letter-spacing:0.1em; text-transform:uppercase; color:#444;"
                                >{move || translate(i18n.locale.get(), "contact.socials_label")}</span>
                                <div class="flex flex-wrap gap-x-6 gap-y-2">
                                    {socials.iter().map(|s| view! {
                                        <a
                                            href=s.href
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            class="group/s inline-flex items-center gap-1.5 no-underline transition-colors duration-200"
                                            style="font-family:'Geist','Inter',system-ui,sans-serif; font-size:13px; font-weight:500; color:#666;"
                                        >
                                            <span class="group-hover/s:text-white transition-colors duration-200">
                                                {s.label}
                                            </span>
                                            <span
                                                class="text-[10px] text-neutral-700 group-hover/s:text-white/50 transition-colors duration-200"
                                                aria-hidden="true"
                                            >"\u{2197}"</span>
                                        </a>
                                    }).collect_view()}
                                </div>
                            </div>

                            <div class="mt-8 flex flex-col min-[420px]:flex-row gap-3">
                                <a
                                    href="mailto:samujalphukan@yahoo.com"
                                    class="inline-flex items-center justify-center gap-2 h-11 px-7 bg-white text-black rounded-xl text-[13px] font-semibold no-underline hover:bg-neutral-200 transition-colors duration-200"
                                    style="font-family:'Geist','Inter',system-ui,sans-serif;"
                                >
                                    {move || translate(i18n.locale.get(), "contact.send_email")}
                                    <span aria-hidden="true">"\u{2192}"</span>
                                </a>
                                <a
                                    href="https://github.com/Samujalphukan228"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="inline-flex items-center justify-center h-11 px-7 text-[13px] font-medium text-neutral-300 border border-white/10 rounded-xl no-underline hover:border-white/20 hover:bg-white/[0.04] transition-all duration-200"
                                    style="font-family:'Geist','Inter',system-ui,sans-serif;"
                                >
                                    {move || translate(i18n.locale.get(), "contact.github")}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    class="h-up grid grid-cols-2 lg:grid-cols-4 gap-3"
                    style="animation-delay:0.2s"
                >
                    {([
                        ("contact.card_status_label", "contact.card_status_value", "contact.card_status_sub"),
                        ("contact.card_open_to_label", "contact.card_open_to_value", "contact.card_open_to_sub"),
                        ("contact.card_location_label", "contact.card_location_value", "contact.card_location_sub"),
                        ("contact.card_site_label", "contact.card_site_value", "contact.card_site_sub"),
                    ]).into_iter().map(|(label_key, value_key, sub_key)| view! {
                        <div class="col-span-1 relative flex flex-col justify-between p-4 sm:p-5 rounded-xl bg-[#0a0a0a] overflow-hidden min-h-[110px] sm:min-h-[130px]">
                            <div class="flex items-center justify-between">
                                <span style="font-family:'Geist Mono',monospace; font-size:10px; letter-spacing:0.1em; text-transform:uppercase; color:#444;">
                                    {move || translate(i18n.locale.get(), label_key)}
                                </span>
                                <span
                                    class="w-1.5 h-1.5 rounded-full"
                                    style="background:#333;"
                                ></span>
                            </div>
                            <div>
                                <span
                                    class="block text-[#ededed]"
                                    style="font-family:'Geist','Inter',system-ui,sans-serif; font-weight:600; font-size:22px; letter-spacing:-0.02em; line-height:1;"
                                >{move || translate(i18n.locale.get(), value_key)}</span>
                                <span
                                    style="font-family:'Geist Mono',monospace; font-size:11px; color:#555; margin-top:4px; display:block;"
                                >
                                    {move || translate(i18n.locale.get(), sub_key)}
                                </span>
                            </div>
                        </div>
                    }).collect_view()}
                </div>

                <div class="pt-10 sm:pt-14">
                    <div class="flex items-center justify-between pb-6 sm:pb-8">
                        <span style="font-family:'Geist Mono',monospace; font-size:10px; letter-spacing:0.04em; color:#333;">
                            {move || translate(i18n.locale.get(), "contact.copyright")}
                        </span>
                        <span style="font-family:'Geist Mono',monospace; font-size:10px; letter-spacing:0.04em; color:#333;">
                            {move || translate(i18n.locale.get(), "contact.footer")}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    }
}
