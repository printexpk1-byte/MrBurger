import { Phone, UtensilsCrossed, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { ADDITIVES_LEGEND, RESTAURANT_INFO, type MenuItem } from '../data/menuData';

interface DishModalProps {
  item: MenuItem | null;
  onClose: () => void;
}

export function DishModal({ item, onClose }: DishModalProps) {
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    setImgError(false);
  }, [item?.id]);

  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/80 backdrop-blur-xs p-0 sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="dish-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full sm:max-w-xl bg-[#17171A] border border-zinc-800 rounded-t-2xl sm:rounded-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Schließen"
          className="absolute top-3 right-3 z-10 h-11 w-11 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-black transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D9232E]"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>

        <div className="relative aspect-[4/3] w-full bg-[#121215] shrink-0">
          {!imgError ? (
            <img
              src={item.image}
              alt={item.imageAlt}
              referrerPolicy="no-referrer"
              onError={() => setImgError(true)}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center gap-2 p-6 bg-gradient-to-br from-zinc-900 via-[#17171A] to-zinc-950 text-zinc-400">
              <UtensilsCrossed className="h-10 w-10 text-[#D9232E]/80" aria-hidden="true" />
              <span className="text-base font-medium text-zinc-200">{item.name}</span>
            </div>
          )}
        </div>

        <div className="p-5 sm:p-6 overflow-y-auto space-y-5">
          <div className="space-y-2">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2
                id="dish-modal-title"
                className="text-2xl font-bold text-white tracking-tight"
              >
                <span>{item.name}</span>
                {item.additives && item.additives.length > 0 && (
                  <sup
                    className="notranslate ml-1.5 text-xs font-medium text-zinc-400"
                    translate="no"
                  >
                    {item.additives.join(', ')}
                  </sup>
                )}
              </h2>
              {item.spiceTag && (
                <span className="text-sm font-semibold text-[#F87171]">
                  <span>{item.spiceTag}</span>
                </span>
              )}
            </div>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              <span>{item.description || item.fallbackSubtitle}</span>
            </p>
          </div>

          <div className="border-t border-b border-zinc-800 py-4 space-y-2.5">
            <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
              <span>Preise</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {item.prices.map((option) => (
                <div
                  key={option.label}
                  className="flex items-center justify-between px-3.5 py-2.5 rounded-lg bg-[#121215] border border-zinc-800/80"
                >
                  <span className="text-sm font-medium text-zinc-300">
                    <span>{option.label}</span>
                  </span>
                  <span
                    className="notranslate text-base font-bold text-white tabular-nums"
                    translate="no"
                  >
                    {option.price}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {item.additives && item.additives.length > 0 && (
            <div className="space-y-1.5 text-xs text-zinc-400">
              <div className="font-semibold text-zinc-300">
                <span>Zusatzstoffe &amp; Hinweise:</span>
              </div>
              <ul className="space-y-1">
                {item.additives.map((code) => (
                  <li key={code}>
                    <span className="notranslate font-medium text-zinc-300" translate="no">
                      {code}){' '}
                    </span>
                    <span>{ADDITIVES_LEGEND[code] || ''}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="pt-1">
            <a
              href={RESTAURANT_INFO.phoneHref}
              className="w-full min-h-[44px] inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-lg bg-[#D9232E] hover:bg-[#b91c25] text-white font-semibold text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>Lieferservice anrufen:</span>
              <span className="notranslate tabular-nums" translate="no">
                {RESTAURANT_INFO.phone}
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
