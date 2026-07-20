use leptos::prelude::*;

use crate::components::Hero;

#[component]
pub fn HomePage() -> impl IntoView {
    view! {
        <div>
            <Hero />
        </div>
    }
}
