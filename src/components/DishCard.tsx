import { UtensilsCrossed } from 'lucide-react';
import { useState } from 'react';
import type { MenuItem } from '../data/menuData';

interface DishCardProps {
  item: MenuItem;
  onSelect: (item: MenuItem) => void;
}

export function DishCard({ item, onSelect }: DishCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <article className="group bg-[#17171A] border border-zinc-800/90 rounded-xl overflow-hidden flex flex-col transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-700">
      <button
        type="button"
        onClick={() => onSelect(item)}
        className="text-left flex flex-col flex-1 w-full cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D9232E]"
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#121215]">
          {!imgError ? (
            <img
              src={item.image}
              alt={item.imageAlt}
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              onError={() => setImgError(true)}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center gap-2 p-6 bg-gradient-to-br from-zinc-900 via-[#17171A] to-zinc-950 text-zinc-400">
              <UtensilsCrossed className="h-8 w-8 text-[#D9232E]/80" aria-hidden="true" />
              <span className="text-sm font-medium text-center text-zinc-300">{item.name}</span>
            </div>
          )}
        </div>

        <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between gap-4 w-full">
          <div className="space-y-2">
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="text-base sm:text-lg font-semibold text-zinc-50 leading-snug">
                <span>{item.name}</span>
                {item.additives && item.additives.length > 0 && (
                  <sup
                    className="notranslate ml-1 text-[11px] font-medium text-zinc-400"
                    translate="no"
                  >
                    {item.additives.join(',')}
                  </sup>
                )}
              </h3>

              {item.spiceTag && (
                <span className="text-xs font-semibold text-[#F87171] whitespace-nowrap shrink-0">
                  <span>{item.spiceTag}</span>
                </span>
              )}
            </div>

            <p className="text-sm text-zinc-300 leading-relaxed">
              <span>{item.description || item.fallbackSubtitle}</span>
            </p>
          </div>

          <div className="pt-3 border-t border-zinc-800/80 w-full">
            {item.prices.length === 1 ? (
              <div className="flex items-baseline justify-between gap-2">
                <span className="text-xs font-medium text-zinc-400">
                  <span>{item.prices[0].label}</span>
                </span>
                <span
                  className="notranslate text-base sm:text-lg font-bold text-white tabular-nums"
                  translate="no"
                >
                  {item.prices[0].price}
                </span>
              </div>
            ) : (
              <div
                className={`grid gap-3 ${
                  item.prices.length === 2 ? 'grid-cols-2' : 'grid-cols-3'
                }`}
              >
                {item.prices.map((option) => (
                  <div key={option.label} className="flex flex-col">
                    <span className="text-xs font-medium text-zinc-400">
                      <span>{option.label}</span>
                    </span>
                    <span
                      className="notranslate text-sm sm:text-base font-bold text-white tabular-nums"
                      translate="no"
                    >
                      {option.price}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </button>
    </article>
  );
}
