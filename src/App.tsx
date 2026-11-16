import { Clock, MapPin, Phone, Search, ShieldCheck, X } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { DishCard } from './components/DishCard';
import { DishModal } from './components/DishModal';
import { GoogleTranslateControl } from './components/GoogleTranslateControl';
import {
  ADDITIVES_LEGEND,
  MENU_CATEGORIES,
  RESTAURANT_INFO,
  type MenuItem,
} from './data/menuData';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<string>(MENU_CATEGORIES[0].id);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const searchResults = useMemo(() => {
    if (!normalizedQuery) return [];
    const results: Array<{ categoryTitle: string; item: MenuItem }> = [];
    for (const category of MENU_CATEGORIES) {
      for (const item of category.items) {
        const haystack = `${item.name} ${item.description ?? ''} ${item.fallbackSubtitle} ${category.title}`.toLowerCase();
        if (haystack.includes(normalizedQuery)) {
          results.push({ categoryTitle: category.title, item });
        }
      }
    }
    return results;
  }, [normalizedQuery]);

  useEffect(() => {
    if (normalizedQuery) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          const id = visible[0].target.getAttribute('data-category-id');
          if (id) setActiveCategory(id);
        }
      },
      { rootMargin: '-96px 0px -65% 0px', threshold: 0 }
    );

    MENU_CATEGORIES.forEach((cat) => {
      const el = sectionRefs.current[cat.id];
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [normalizedQuery]);

  const scrollToCategory = (categoryId: string) => {
    setSearchQuery('');
    setActiveCategory(categoryId);

    requestAnimationFrame(() => {
      const el = sectionRefs.current[categoryId];
      if (el) {
        const yOffset = -68;
        const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    });
  };

  return (
    <div className="min-h-screen bg-[#0E0E10] text-zinc-100 flex flex-col">
      {/* Zone 1 / 2 / 3 Top Bar Contract (non-sticky so mobile sticky stays < 15%) */}
      <header className="border-b border-zinc-800/80 bg-[#0E0E10]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
          <a
            href="#top"
            className="notranslate font-display text-2xl sm:text-3xl font-bold tracking-wide text-white whitespace-nowrap shrink-0"
            translate="no"
          >
            MR. NICE BURGERS
          </a>

          <nav
            aria-label="Hauptnavigation"
            className="hidden lg:flex items-center gap-6 text-sm font-medium text-zinc-300"
          >
            <button
              type="button"
              onClick={() => scrollToCategory('burger')}
              className="hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Burger</span>
            </button>
            <button
              type="button"
              onClick={() => scrollToCategory('smash')}
              className="hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Smash</span>
            </button>
            <button
              type="button"
              onClick={() => scrollToCategory('hot-dogs')}
              className="hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Hot Dogs</span>
            </button>
            <button
              type="button"
              onClick={() => scrollToCategory('fingerfood')}
              className="hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Fingerfood</span>
            </button>
            <a
              href="#kontakt"
              className="hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              <span>Kontakt</span>
            </a>
          </nav>

          <div className="flex items-center shrink-0">
            <a
              href={RESTAURANT_INFO.phoneHref}
              className="inline-flex items-center gap-2 px-4 py-2 min-h-[40px] rounded-lg bg-[#D9232E] hover:bg-[#b91c25] text-white text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span className="hidden sm:inline">Lieferservice:</span>
              <span className="notranslate tabular-nums" translate="no">
                {RESTAURANT_INFO.phone}
              </span>
            </a>
          </div>
        </div>
      </header>

      {/* Visible Google Translate Language Bar */}
      <section
        aria-label="Sprachauswahl"
        className="border-b border-zinc-800/80 bg-[#121215]"
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5">
          <GoogleTranslateControl />
          <div className="text-xs text-zinc-400 flex items-center gap-2 whitespace-nowrap">
            <ShieldCheck className="h-4 w-4 text-emerald-500 shrink-0" aria-hidden="true" />
            <span>{RESTAURANT_INFO.halalLabel}</span>
            <span aria-hidden="true">·</span>
            <span className="notranslate" translate="no">
              {RESTAURANT_INFO.highlights}
            </span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section id="top" className="border-b border-zinc-800/80 bg-[#0E0E10]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-6 flex flex-col justify-between gap-6">
              <div className="space-y-4">
                <div className="text-xs sm:text-sm font-medium text-zinc-400 flex flex-wrap items-center gap-2">
                  <span>Bergheim</span>
                  <span aria-hidden="true">·</span>
                  <span>Vor Ort &amp; Lieferservice</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-emerald-400 font-semibold">Halal</span>
                </div>

                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.02] [text-wrap:balance]">
                  <span className="notranslate" translate="no">
                    MR. NICE BURGERS
                  </span>
                  <span className="block text-zinc-300 text-2xl sm:text-3xl lg:text-4xl font-semibold mt-2">
                    <span>Digitale Speisekarte</span>
                  </span>
                </h1>

                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-[60ch]">
                  <span>{RESTAURANT_INFO.taglineQuote}</span>
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#17171A] border border-zinc-800/90 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                    <Clock className="h-3.5 w-3.5 text-[#D9232E]" aria-hidden="true" />
                    <span>Liefer- und Öffnungszeiten</span>
                  </div>
                  <p className="text-sm font-medium text-zinc-100">
                    <span>{RESTAURANT_INFO.hoursMain}</span>
                  </p>
                  <p className="text-xs font-semibold text-[#F87171]">
                    <span>{RESTAURANT_INFO.hoursClosed}</span>
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#17171A] border border-zinc-800/90 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                    <MapPin className="h-3.5 w-3.5 text-[#D9232E]" aria-hidden="true" />
                    <span>Standort</span>
                  </div>
                  <p className="text-sm font-medium text-zinc-100">
                    <span className="notranslate" translate="no">
                      {RESTAURANT_INFO.address}
                    </span>
                  </p>
                  <a
                    href={RESTAURANT_INFO.phoneHref}
                    className="inline-block text-xs font-semibold text-[#F87171] hover:text-white transition-colors tabular-nums"
                  >
                    <span>Tel: </span>
                    <span className="notranslate" translate="no">
                      {RESTAURANT_INFO.phone}
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative h-64 sm:h-80 lg:h-full min-h-[260px] rounded-xl overflow-hidden border border-zinc-800 bg-[#17171A]">
                <img
                  src={RESTAURANT_INFO.heroImage}
                  alt="Mr. Nice Burgers Speisenauswahl mit Burger, Chili Cheese Hot Dog, Fritten und Salat"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent flex items-end p-5">
                  <div className="space-y-1">
                    <p className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
                      <span>{RESTAURANT_INFO.corporateTitle}</span>
                    </p>
                    <p className="text-sm font-medium text-white max-w-md">
                      <span>{RESTAURANT_INFO.corporateText}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Category Bar (single compact ~52px bar <= 15% mobile viewport cap) */}
      <div className="sticky top-0 z-30 bg-[#0E0E10]/95 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-13 flex items-center gap-3">
          <nav
            aria-label="Kategorien"
            className="flex-1 flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1"
          >
            {MENU_CATEGORIES.map((category) => {
              const isActive = !normalizedQuery && activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => scrollToCategory(category.id)}
                  className={`px-3 py-1.5 min-h-[36px] rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D9232E] ${
                    isActive
                      ? 'bg-[#D9232E] text-white'
                      : 'text-zinc-300 hover:text-white hover:bg-[#17171A]'
                  }`}
                >
                  <span>{category.title}</span>
                </button>
              );
            })}
          </nav>

          <div className="relative shrink-0 w-36 sm:w-56">
            <Search
              className="h-4 w-4 text-zinc-400 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none"
              aria-hidden="true"
            />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Suchen..."
              aria-label="Gerichte durchsuchen"
              className="w-full h-9 pl-8 pr-7 rounded-lg bg-[#17171A] border border-zinc-800 text-xs sm:text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-[#D9232E]"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                aria-label="Suche löschen"
                className="absolute right-1.5 top-1/2 -translate-y-1/2 p-1 text-zinc-400 hover:text-white cursor-pointer"
              >
                <X className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Menu Content */}
      <main className="flex-1 max-w-[1280px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-14">
        {normalizedQuery ? (
          <section aria-label="Suchergebnisse" className="space-y-6">
            <div className="flex items-baseline justify-between gap-4 border-b border-zinc-800 pb-4">
              <div>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  <span>Suchergebnisse</span>
                </h2>
                <p className="text-sm text-zinc-400 mt-1">
                  <span className="tabular-nums">{searchResults.length}</span>{' '}
                  <span>Treffer für „{searchQuery}“</span>
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="px-3.5 py-2 rounded-lg bg-[#17171A] border border-zinc-800 text-xs sm:text-sm font-medium text-zinc-200 hover:text-white hover:border-zinc-700 cursor-pointer"
              >
                <span>Alle anzeigen</span>
              </button>
            </div>

            {searchResults.length === 0 ? (
              <div className="p-8 rounded-xl bg-[#17171A] border border-zinc-800 text-center space-y-2">
                <p className="text-base font-medium text-zinc-200">
                  <span>Keine passenden Gerichte gefunden.</span>
                </p>
                <p className="text-sm text-zinc-400">
                  <span>Versuchen Sie einen anderen Suchbegriff oder wählen Sie eine Kategorie.</span>
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {searchResults.map(({ item }) => (
                  <DishCard key={item.id} item={item} onSelect={setSelectedDish} />
                ))}
              </div>
            )}
          </section>
        ) : (
          MENU_CATEGORIES.map((category) => (
            <section
              key={category.id}
              id={`section-${category.id}`}
              data-category-id={category.id}
              ref={(el) => {
                sectionRefs.current[category.id] = el;
              }}
              className="space-y-6 scroll-mt-20"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 border-b border-zinc-800 pb-4">
                <div>
                  <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
                    <span>{category.title}</span>
                  </h2>
                  {category.subtitle && (
                    <p className="text-sm text-zinc-400 mt-1">
                      <span>{category.subtitle}</span>
                    </p>
                  )}
                </div>
                <span className="text-xs font-medium text-zinc-500 tabular-nums">
                  <span>{category.items.length} Positionen</span>
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item) => (
                  <DishCard key={item.id} item={item} onSelect={setSelectedDish} />
                ))}
              </div>
            </section>
          ))
        )}

        {/* Additives & Corporate Offer Section */}
        <section
          aria-label="Zusatzstoffe und Firmenangebot"
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-4 border-t border-zinc-800"
        >
          <div className="lg:col-span-5 p-6 rounded-xl bg-[#17171A] border border-zinc-800/90 space-y-2">
            <h2 className="font-display text-2xl font-bold text-white">
              <span>{RESTAURANT_INFO.corporateTitle}</span>
            </h2>
            <p className="text-sm text-zinc-300 leading-relaxed">
              <span>{RESTAURANT_INFO.corporateText}</span>
            </p>
          </div>

          <div className="lg:col-span-7 p-6 rounded-xl bg-[#17171A] border border-zinc-800/90 space-y-3">
            <h2 className="text-sm font-semibold text-zinc-200">
              <span>Hinweise zu Zusatzstoffen</span>
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              {Object.entries(ADDITIVES_LEGEND).map(([code, label], index, arr) => (
                <span key={code}>
                  <span className="notranslate font-medium text-zinc-300" translate="no">
                    {code}){' '}
                  </span>
                  <span>{label}</span>
                  {index < arr.length - 1 ? ', ' : ''}
                </span>
              ))}
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="kontakt" className="border-t border-zinc-800 bg-[#0B0B0D]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-2">
              <div
                className="notranslate font-display text-2xl font-bold text-white"
                translate="no"
              >
                MR. NICE BURGERS
              </div>
              <p className="text-xs text-zinc-400">
                <span>{RESTAURANT_INFO.halalLabel}</span>
                <span aria-hidden="true"> · </span>
                <span className="notranslate" translate="no">
                  {RESTAURANT_INFO.highlights}
                </span>
              </p>
            </div>

            <div className="space-y-1.5 text-sm">
              <div className="font-semibold text-zinc-200">
                <span>Liefer- und Öffnungszeiten</span>
              </div>
              <p className="text-zinc-400">
                <span>{RESTAURANT_INFO.hoursMain}</span>
              </p>
              <p className="text-[#F87171] font-medium">
                <span>{RESTAURANT_INFO.hoursClosed}</span>
              </p>
            </div>

            <div className="space-y-1.5 text-sm">
              <div className="font-semibold text-zinc-200">
                <span>Adresse &amp; Lieferservice</span>
              </div>
              <p className="text-zinc-400">
                <span className="notranslate" translate="no">
                  {RESTAURANT_INFO.address}
                </span>
              </p>
              <a
                href={RESTAURANT_INFO.phoneHref}
                className="inline-block text-white font-semibold hover:text-[#D9232E] transition-colors tabular-nums"
              >
                <span className="notranslate" translate="no">
                  {RESTAURANT_INFO.phone}
                </span>
              </a>
            </div>

            <div className="space-y-1.5 text-sm">
              <div className="font-semibold text-zinc-200">
                <span>Social Media</span>
              </div>
              <p className="text-zinc-400">
                <span>Instagram: </span>
                <span className="notranslate text-zinc-200" translate="no">
                  @{RESTAURANT_INFO.instagram}
                </span>
              </p>
              <p className="text-zinc-400">
                <span>Facebook: </span>
                <span className="notranslate text-zinc-200" translate="no">
                  {RESTAURANT_INFO.facebook}
                </span>
              </p>
            </div>
          </div>
        </div>
      </footer>

      <DishModal item={selectedDish} onClose={() => setSelectedDish(null)} />
    </div>
  );
}
