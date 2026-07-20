use std::collections::HashMap;
use std::sync::OnceLock;

use leptos::prelude::*;
use serde::Deserialize;

const STORAGE_KEY: &str = "portfolio_locale";

#[derive(Debug, Clone, Copy, PartialEq, Eq, Hash)]
pub enum Locale {
    En,
    Es,
    Fr,
    De,
    PtBr,
    Hi,
    Ja,
    Ar,
    ZhCn,
    Ko,
}

impl Locale {
    pub const ALL: [Locale; 10] = [
        Locale::En,
        Locale::PtBr,
        Locale::ZhCn,
        Locale::Es,
        Locale::Fr,
        Locale::De,
        Locale::Hi,
        Locale::Ja,
        Locale::Ar,
        Locale::Ko,
    ];

    pub fn url_segment(self) -> &'static str {
        match self {
            Locale::En => "en",
            Locale::Es => "es",
            Locale::Fr => "fr",
            Locale::De => "de",
            Locale::PtBr => "pt-BR",
            Locale::Hi => "hi",
            Locale::Ja => "ja",
            Locale::Ar => "ar",
            Locale::ZhCn => "zh-CN",
            Locale::Ko => "ko",
        }
    }

    pub fn html_lang(self) -> &'static str {
        self.url_segment()
    }

    pub fn lang_key(self) -> &'static str {
        match self {
            Locale::En => "lang.en",
            Locale::Es => "lang.es",
            Locale::Fr => "lang.fr",
            Locale::De => "lang.de",
            Locale::PtBr => "lang.pt-BR",
            Locale::Hi => "lang.hi",
            Locale::Ja => "lang.ja",
            Locale::Ar => "lang.ar",
            Locale::ZhCn => "lang.zh-CN",
            Locale::Ko => "lang.ko",
        }
    }

    pub fn short_code(self) -> &'static str {
        match self {
            Locale::En => "EN",
            Locale::Es => "ES",
            Locale::Fr => "FR",
            Locale::De => "DE",
            Locale::PtBr => "PT",
            Locale::Hi => "HI",
            Locale::Ja => "JA",
            Locale::Ar => "AR",
            Locale::ZhCn => "ZH",
            Locale::Ko => "KO",
        }
    }

    pub fn is_rtl(self) -> bool {
        matches!(self, Locale::Ar)
    }

    pub fn from_url_segment(segment: &str) -> Option<Self> {
        match segment {
            "es" => Some(Locale::Es),
            "fr" => Some(Locale::Fr),
            "de" => Some(Locale::De),
            "pt-BR" => Some(Locale::PtBr),
            "hi" => Some(Locale::Hi),
            "ja" => Some(Locale::Ja),
            "ar" => Some(Locale::Ar),
            "zh-CN" => Some(Locale::ZhCn),
            "ko" => Some(Locale::Ko),
            _ => None,
        }
    }

    pub fn from_storage(value: &str) -> Option<Self> {
        if value == "en" {
            return Some(Locale::En);
        }
        Self::from_url_segment(value)
    }

    fn json_raw(self) -> &'static str {
        match self {
            Locale::En => include_str!(concat!(env!("CARGO_MANIFEST_DIR"), "/locales/en.json")),
            Locale::Es => include_str!(concat!(env!("CARGO_MANIFEST_DIR"), "/locales/es.json")),
            Locale::Fr => include_str!(concat!(env!("CARGO_MANIFEST_DIR"), "/locales/fr.json")),
            Locale::De => include_str!(concat!(env!("CARGO_MANIFEST_DIR"), "/locales/de.json")),
            Locale::PtBr => {
                include_str!(concat!(env!("CARGO_MANIFEST_DIR"), "/locales/pt-BR.json"))
            }
            Locale::Hi => include_str!(concat!(env!("CARGO_MANIFEST_DIR"), "/locales/hi.json")),
            Locale::Ja => include_str!(concat!(env!("CARGO_MANIFEST_DIR"), "/locales/ja.json")),
            Locale::Ar => include_str!(concat!(env!("CARGO_MANIFEST_DIR"), "/locales/ar.json")),
            Locale::ZhCn => {
                include_str!(concat!(env!("CARGO_MANIFEST_DIR"), "/locales/zh-CN.json"))
            }
            Locale::Ko => include_str!(concat!(env!("CARGO_MANIFEST_DIR"), "/locales/ko.json")),
        }
    }
}

#[derive(Clone, Copy)]
pub struct I18n {
    pub locale: RwSignal<Locale>,
}

impl I18n {
    pub fn provide(initial: Locale) -> Self {
        let ctx = I18n {
            locale: RwSignal::new(initial),
        };
        provide_context(ctx);
        ctx
    }

    pub fn use_ctx() -> Self {
        expect_context::<I18n>()
    }

    pub fn t(&self, key: &'static str) -> String {
        translate(self.locale.get_untracked(), key)
    }

    pub fn localize(&self, path: &str) -> String {
        localize_path(path, self.locale.get())
    }
}

fn catalog() -> &'static HashMap<Locale, HashMap<String, String>> {
    static CACHE: OnceLock<HashMap<Locale, HashMap<String, String>>> = OnceLock::new();
    CACHE.get_or_init(|| {
        Locale::ALL
            .into_iter()
            .map(|locale| {
                let parsed: HashMap<String, String> =
                    serde_json::from_str(locale.json_raw()).expect("valid locale json");
                (locale, parsed)
            })
            .collect()
    })
}

pub fn translate(locale: Locale, key: &str) -> String {
    catalog()
        .get(&locale)
        .and_then(|m| m.get(key))
        .cloned()
        .or_else(|| {
            catalog()
                .get(&Locale::En)
                .and_then(|m| m.get(key))
                .cloned()
        })
        .unwrap_or_else(|| key.to_string())
}

pub fn localize_path(path: &str, locale: Locale) -> String {
    let path = if path.is_empty() { "/" } else { path };
    match locale {
        Locale::En => path.to_string(),
        _ if path == "/" => format!("/{}", locale.url_segment()),
        _ => format!("/{}{}", locale.url_segment(), path),
    }
}

pub fn strip_locale_prefix(path: &str) -> (String, Locale) {
    let normalized = {
        let trimmed = path.trim_end_matches('/');
        if trimmed.is_empty() {
            "/".to_string()
        } else {
            trimmed.to_string()
        }
    };

    for locale in Locale::ALL {
        if locale == Locale::En {
            continue;
        }
        let prefix = format!("/{}", locale.url_segment());
        if normalized == prefix {
            return ("/".to_string(), locale);
        }
        if let Some(rest) = normalized.strip_prefix(&format!("{prefix}/")) {
            return (format!("/{rest}"), locale);
        }
    }

    (normalized, Locale::En)
}

pub fn save_locale(locale: Locale) {
    if let Some(window) = web_sys::window() {
        if let Ok(Some(storage)) = window.local_storage() {
            let _ = storage.set_item(STORAGE_KEY, locale.url_segment());
        }
    }
}

pub fn load_stored_locale() -> Option<Locale> {
    web_sys::window().and_then(|window| {
        window
            .local_storage()
            .ok()
            .flatten()
            .and_then(|storage| storage.get_item(STORAGE_KEY).ok().flatten())
            .and_then(|value| Locale::from_storage(&value))
    })
}

pub fn locale_from_pathname(path: &str) -> Locale {
    let (_, locale) = strip_locale_prefix(path);
    locale
}

pub fn resolve_initial_locale(pathname: &str) -> Locale {
    if let Some(stored) = load_stored_locale() {
        return stored;
    }
    let locale = locale_from_pathname(pathname);
    save_locale(locale);
    locale
}

pub fn preferred_locale(pathname: &str) -> Locale {
    load_stored_locale().unwrap_or_else(|| locale_from_pathname(pathname))
}

pub fn switch_locale_path(current_path: &str, new_locale: Locale) -> String {
    let (stripped, _) = strip_locale_prefix(current_path);
    localize_path(&stripped, new_locale)
}

pub fn set_document_locale(locale: Locale) {
    if let Some(window) = web_sys::window() {
        if let Some(document) = window.document() {
            if let Some(html) = document.document_element() {
                let _ = html.set_attribute("lang", locale.html_lang());
                let _ = html.set_attribute("dir", if locale.is_rtl() { "rtl" } else { "ltr" });
            }
        }
    }
}

#[allow(dead_code)]
#[derive(Deserialize)]
struct LocaleFile {
    #[serde(flatten)]
    entries: HashMap<String, String>,
}
