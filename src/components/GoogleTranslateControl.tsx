import { Globe } from 'lucide-react';
import { useEffect, useState } from 'react';

const QUICK_LANGUAGES = [
  { code: 'de', label: 'Deutsch' },
  { code: 'en', label: 'English' },
  { code: 'tr', label: 'Türkçe' },
  { code: 'ar', label: 'العربية' },
  { code: 'fr', label: 'Français' },
  { code: 'es', label: 'Español' },
];

function getCookieLanguage(): string {
  if (typeof document === 'undefined') return 'de';
  const match = document.cookie.match(/googtrans=\/de\/([a-zA-Z-]+)/);
  return match?.[1] || 'de';
}

function setGoogleTranslateCookie(lang: string) {
  if (typeof document === 'undefined') return;
  const domain = window.location.hostname;
  if (lang === 'de') {
    document.cookie = 'googtrans=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    document.cookie = `googtrans=; path=/; domain=${domain}; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    document.cookie = `googtrans=; path=/; domain=.${domain}; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
  } else {
    document.cookie = `googtrans=/de/${lang}; path=/`;
    document.cookie = `googtrans=/de/${lang}; path=/; domain=${domain}`;
  }
}

export function GoogleTranslateControl() {
  const [activeLang, setActiveLang] = useState<string>(getCookieLanguage);

  useEffect(() => {
    const win = window as Window & {
      googleTranslateElementInit?: () => void;
    };
    const target = document.getElementById('google_translate_element');
    if (target && !target.hasChildNodes() && typeof win.googleTranslateElementInit === 'function') {
      win.googleTranslateElementInit();
    }

    const syncSelect = () => {
      const select = document.querySelector<HTMLSelectElement>('.goog-te-combo');
      if (!select) return false;

      const handleComboChange = () => {
        setActiveLang(select.value || 'de');
      };

      select.addEventListener('change', handleComboChange);
      return () => select.removeEventListener('change', handleComboChange);
    };

    let cleanup: (() => void) | undefined;
    const result = syncSelect();
    if (typeof result === 'function') {
      cleanup = result;
      return cleanup;
    }

    const timer = window.setInterval(() => {
      const res = syncSelect();
      if (typeof res === 'function') {
        cleanup = res;
        window.clearInterval(timer);
      }
    }, 400);

    return () => {
      window.clearInterval(timer);
      if (cleanup) cleanup();
    };
  }, []);

  const handleLanguageChange = (langCode: string) => {
    setActiveLang(langCode);
    setGoogleTranslateCookie(langCode);

    const select = document.querySelector<HTMLSelectElement>('.goog-te-combo');
    if (select) {
      if (langCode === 'de') {
        // Restore original German page cleanly when returning to default language
        const iframe = document.querySelector<HTMLIFrameElement>('iframe.goog-te-banner-frame');
        const restoreBtn = iframe?.contentDocument?.querySelector<HTMLElement>(
          '[id=":1.restore"], button[id*="restore"]'
        );
        if (restoreBtn) {
          restoreBtn.click();
          return;
        }
        select.value = 'de';
        select.dispatchEvent(new Event('change', { bubbles: true }));
        window.location.reload();
        return;
      }

      select.value = langCode;
      select.dispatchEvent(new Event('change', { bubbles: true }));
    } else if (langCode !== 'de') {
      window.location.reload();
    }
  };

  return (
    <div
      className="notranslate flex flex-wrap items-center gap-2 sm:gap-3"
      translate="no"
      aria-label="Sprache wählen / Google Translate"
    >
      <div className="flex items-center gap-1.5 text-xs font-medium text-zinc-300 whitespace-nowrap shrink-0">
        <Globe className="h-4 w-4 text-[#D9232E]" aria-hidden="true" />
        <span>Sprache:</span>
      </div>

      <div className="flex flex-wrap items-center gap-1 p-1 rounded-lg bg-[#17171A] border border-zinc-800">
        {QUICK_LANGUAGES.map((lang) => {
          const isSelected = activeLang === lang.code;
          return (
            <button
              key={lang.code}
              type="button"
              onClick={() => handleLanguageChange(lang.code)}
              className={`px-2.5 py-1.5 min-h-[32px] text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D9232E] ${
                isSelected
                  ? 'bg-[#D9232E] text-white'
                  : 'text-zinc-300 hover:text-white hover:bg-zinc-800'
              }`}
              aria-pressed={isSelected}
            >
              {lang.label}
            </button>
          );
        })}
      </div>

      {/* Native Google Translate Widget exposing all 100+ Google Translate languages */}
      <div
        id="google_translate_element"
        className="min-h-[34px] flex items-center"
        title="Alle Sprachen über Google Translate"
      />
    </div>
  );
}
