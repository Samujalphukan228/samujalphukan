use leptos::prelude::*;
use leptos_router::components::{Route, Router, Routes};
use leptos_router::hooks::{use_location, use_navigate};
use leptos_router::path;
use leptos_router::NavigateOptions;

use crate::components::Navbar;
use crate::i18n::{I18n, preferred_locale, resolve_initial_locale, set_document_locale, switch_locale_path};
use crate::pages::{ContactPage, HomePage, WorkPage};

#[component]
pub fn App() -> impl IntoView {
    console_error_panic_hook::set_once();

    view! {
        <Router>
            <AppContent />
        </Router>
    }
}

#[component]
fn AppContent() -> impl IntoView {
    let location = use_location();
    let navigate = use_navigate();

    let initial_path = web_sys::window()
        .and_then(|w| w.location().pathname().ok())
        .unwrap_or_else(|| "/".to_string());
    let initial = resolve_initial_locale(&initial_path);
    let i18n = I18n::provide(initial);
    set_document_locale(initial);

    Effect::new(move |_| {
        let path = location.pathname.get();
        let preferred = preferred_locale(&path);
        let expected_path = switch_locale_path(&path, preferred);
        if path != expected_path {
            let _ = navigate(&expected_path, NavigateOptions { replace: true, scroll: false, ..Default::default() });
            return;
        }
        if i18n.locale.get_untracked() != preferred {
            i18n.locale.set(preferred);
        }
        set_document_locale(preferred);
    });

    view! {
        <div class="min-h-screen bg-canvas">
            <Navbar />
            <main>
                <Routes fallback=|| view! { <div>"Not Found"</div> }>
                    <Route path=path!("/") view=HomePage />
                    <Route path=path!("/work") view=WorkPage />
                    <Route path=path!("/contact") view=ContactPage />

                    <Route path=path!("/es") view=HomePage />
                    <Route path=path!("/es/work") view=WorkPage />
                    <Route path=path!("/es/contact") view=ContactPage />

                    <Route path=path!("/fr") view=HomePage />
                    <Route path=path!("/fr/work") view=WorkPage />
                    <Route path=path!("/fr/contact") view=ContactPage />

                    <Route path=path!("/de") view=HomePage />
                    <Route path=path!("/de/work") view=WorkPage />
                    <Route path=path!("/de/contact") view=ContactPage />

                    <Route path=path!("/pt-BR") view=HomePage />
                    <Route path=path!("/pt-BR/work") view=WorkPage />
                    <Route path=path!("/pt-BR/contact") view=ContactPage />

                    <Route path=path!("/hi") view=HomePage />
                    <Route path=path!("/hi/work") view=WorkPage />
                    <Route path=path!("/hi/contact") view=ContactPage />

                    <Route path=path!("/ja") view=HomePage />
                    <Route path=path!("/ja/work") view=WorkPage />
                    <Route path=path!("/ja/contact") view=ContactPage />

                    <Route path=path!("/ar") view=HomePage />
                    <Route path=path!("/ar/work") view=WorkPage />
                    <Route path=path!("/ar/contact") view=ContactPage />

                    <Route path=path!("/zh-CN") view=HomePage />
                    <Route path=path!("/zh-CN/work") view=WorkPage />
                    <Route path=path!("/zh-CN/contact") view=ContactPage />

                    <Route path=path!("/ko") view=HomePage />
                    <Route path=path!("/ko/work") view=WorkPage />
                    <Route path=path!("/ko/contact") view=ContactPage />
                </Routes>
            </main>
        </div>
    }
}
