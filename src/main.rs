pub mod app;
pub mod components;
pub mod i18n;
pub mod pages;

use app::App;
use leptos::prelude::*;

fn main() {
    mount_to_body(App);
}
