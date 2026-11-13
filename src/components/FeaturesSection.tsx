import { useState } from 'react';
import {
  LayoutGrid,
  Lock,
  PhoneCall,
  Search,
  ShieldCheck,
  X,
} from 'lucide-react';
import {
  CONSTRUCTION_CATEGORIES,
  KEY_FEATURES,
  filterCategories,
  type ConstructionCategory,
  type KeyFeature,
} from '../utils/rozgarData';

function FeatureIcon({ iconKey }: { iconKey: KeyFeature['iconKey'] }) {
  switch (iconKey) {
    case 'grid':
      return <LayoutGrid className="h-6 w-6 text-[#F97316]" aria-hidden="true" />;
    case 'shieldCheck':
      return <ShieldCheck className="h-6 w-6 text-[#1E3A8A]" aria-hidden="true" />;
    case 'phone':
      return <PhoneCall className="h-6 w-6 text-[#F97316]" aria-hidden="true" />;
    case 'lock':
      return <Lock className="h-6 w-6 text-[#1E3A8A]" aria-hidden="true" />;
  }
}

const GROUP_OPTIONS: Array<{
  id: 'all' | ConstructionCategory['group'];
  label: string;
}> = [
  { id: 'all', label: 'All (12)' },
  { id: 'construction', label: 'Construction & Repair' },
  { id: 'utilities', label: 'Bijli & Paani' },
  { id: 'finishing', label: 'Finishing & Paint' },
];

export function FeaturesSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGroup, setSelectedGroup] = useState<
    'all' | ConstructionCategory['group']
  >('all');

  const filteredCategories = filterCategories(
    CONSTRUCTION_CATEGORIES,
    searchQuery,
    selectedGroup
  );

  return (
    <section id="features" className="border-t border-slate-200 bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Features Heading */}
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-wide text-[#F97316]">
            RozgarHub Kyun Chunein?
          </p>
          <h2 className="mt-1 font-display text-2xl font-bold tracking-tight text-[#1E3A8A] sm:text-3xl text-balance">
            Ghar ke Har Kaam ke Liye Seedha, Surakshit aur Sahi Platform
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600">
            Chahe naya ghar banana ho ya chota repair kaam, RozgarHub par aap seedha area ke verified karigaron se baat kar sakte hain.
          </p>
        </div>

        {/* 4 Clean Feature Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {KEY_FEATURES.map((feature, index) => (
            <article
              key={feature.id}
              className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-xs transition-colors duration-150 hover:border-blue-200 sm:p-7"
            >
              <div>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 border border-slate-200">
                    <FeatureIcon iconKey={feature.iconKey} />
                  </div>
                  <span className="text-xs font-semibold text-slate-500 tabular-nums">
                    0{index + 1} · {feature.highlight}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-xl font-bold text-slate-900">
                  {feature.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-600 sm:text-base">
                  {feature.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Interactive 12 Home Construction Categories Directory */}
        <div
          id="categories"
          className="mt-16 border-t border-slate-200 pt-12"
        >
          <div className="flex flex-col justify-between gap-5 pb-6 lg:flex-row lg:items-end">
            <div>
              <p className="text-xs font-semibold tracking-wide text-[#F97316]">
                Poori 12 Categories List
              </p>
              <h3 className="mt-1 font-display text-xl font-bold text-[#1E3A8A] sm:text-2xl">
                App ke Andar Milne Wale 12 Home Construction Kaam
              </h3>
            </div>

            {/* Search + Group Filter */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="relative">
                <label htmlFor="category-search" className="sr-only">
                  Kaam ya mistri search karein
                </label>
                <Search
                  className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                  aria-hidden="true"
                />
                <input
                  id="category-search"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Khojein: Rajmistri, Plumber..."
                  className="w-full rounded-lg border border-slate-300 bg-white py-2 pl-9 pr-8 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#1E3A8A] focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/20 sm:w-64"
                />
                {searchQuery && (
                  <button
                    type="button"
                    aria-label="Clear search"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                  >
                    <X className="h-4 w-4" aria-hidden="true" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Group Filter Tabs */}
          <div
            role="group"
            aria-label="Filter construction categories"
            className="mt-5 flex flex-wrap items-center justify-between gap-3"
          >
            <div className="flex flex-wrap items-center gap-1.5 rounded-lg bg-slate-200/70 p-1">
              {GROUP_OPTIONS.map((group) => {
                const active = selectedGroup === group.id;
                return (
                  <button
                    key={group.id}
                    type="button"
                    onClick={() => setSelectedGroup(group.id)}
                    className={`rounded-md px-3 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E3A8A] ${
                      active
                        ? 'bg-white text-[#1E3A8A] shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {group.label}
                  </button>
                );
              })}
            </div>

            <p className="text-xs font-medium text-slate-600 tabular-nums">
              Dikha rahe hain: {filteredCategories.length} / 12 categories
            </p>
          </div>

          {/* Categories Grid */}
          {filteredCategories.length > 0 ? (
            <div className="mt-6 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
              {filteredCategories.map((category, idx) => (
                <div
                  key={category.id}
                  className="rounded-xl border border-slate-200 bg-white p-4 transition-colors duration-150 hover:border-orange-300"
                >
                  <div className="flex items-baseline justify-between gap-2">
                    <h4 className="font-display text-base font-bold text-slate-900">
                      {category.name}
                    </h4>
                    <span className="font-mono text-xs font-medium tabular-nums text-slate-400">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <p className="mt-0.5 text-xs font-semibold text-[#F97316]">
                    {category.hinglishTag}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    {category.workExamples}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-6 rounded-xl border border-slate-200 bg-white p-8 text-center">
              <p className="text-sm font-semibold text-slate-900">
                &ldquo;{searchQuery}&rdquo; se milti-julti koi category nahi mili.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedGroup('all');
                }}
                className="mt-3 rounded-lg bg-[#1E3A8A] px-4 py-2 text-xs font-semibold text-white hover:bg-blue-800"
              >
                Sabhi 12 Categories Dekhein
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
