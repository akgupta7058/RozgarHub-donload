import { useState } from 'react';
import {
  CheckCircle2,
  Download,
  HelpCircle,
  Settings,
  Smartphone,
} from 'lucide-react';
import {
  INSTALL_STEPS,
  PHONE_BRAND_TIPS,
  type InstallStep,
  type PhoneBrandTip,
} from '../utils/rozgarData';

function StepIcon({ iconKey }: { iconKey: InstallStep['iconKey'] }) {
  switch (iconKey) {
    case 'download':
      return <Download className="h-6 w-6 text-[#F97316]" aria-hidden="true" />;
    case 'settings':
      return <Settings className="h-6 w-6 text-[#1E3A8A]" aria-hidden="true" />;
    case 'check':
      return <CheckCircle2 className="h-6 w-6 text-emerald-600" aria-hidden="true" />;
  }
}

export function InstallGuideSection() {
  const [selectedBrand, setSelectedBrand] = useState<PhoneBrandTip['id']>('android');
  const activeTip =
    PHONE_BRAND_TIPS.find((tip) => tip.id === selectedBrand) ?? PHONE_BRAND_TIPS[0];

  return (
    <section id="install-guide" className="bg-slate-50 py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-4 pb-8 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold tracking-wide text-[#F97316]">
              Aasaan Android Setup
            </p>
            <h2 className="mt-1 font-display text-2xl font-bold tracking-tight text-[#1E3A8A] sm:text-3xl text-balance">
              App Kaise Install Karein? (Sirf 30 Second)
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-slate-600">
            RozgarHub sirf 1.2 MB ka lightweight APK hai. Bina Play Store ke bhi 3 aasaan steps me install ho jata hai.
          </p>
        </div>

        {/* 3-Step Visual Boxes (Single-level elevation) */}
        <ol className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {INSTALL_STEPS.map((step) => (
            <li
              key={step.id}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-xs transition-colors duration-150 hover:border-blue-200"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-slate-50">
                  <StepIcon iconKey={step.iconKey} />
                </div>
                <span className="font-mono text-2xl font-bold tabular-nums text-slate-300">
                  {step.stepNumber}
                </span>
              </div>

              <h3 className="mt-5 font-display text-lg font-bold text-slate-900">
                Step {step.id}: {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                {step.description}
              </p>
            </li>
          ))}
        </ol>

        {/* Interactive Brand-Specific Help for Step 2 (Separated by hairline divider, no nested boxes) */}
        <div className="mt-10 border-t border-slate-200 pt-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-2.5">
              <HelpCircle
                className="h-5 w-5 shrink-0 text-[#1E3A8A]"
                aria-hidden="true"
              />
              <span className="text-sm font-semibold text-slate-900">
                &apos;Allow Unknown Apps&apos; madad:
              </span>
            </div>

            <div
              role="tablist"
              aria-label="Phone brand install tips"
              className="flex flex-wrap items-center gap-1 rounded-lg bg-slate-200/75 p-1 lg:flex-nowrap shrink-0"
            >
              {PHONE_BRAND_TIPS.map((tip) => {
                const isActive = tip.id === selectedBrand;
                return (
                  <button
                    key={tip.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setSelectedBrand(tip.id)}
                    className={`rounded-md px-3 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E3A8A] ${
                      isActive
                        ? 'bg-white text-[#1E3A8A] shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {tip.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div
            role="tabpanel"
            aria-label={activeTip.label}
            className="mt-4 flex items-start gap-3 rounded-xl border border-slate-200 bg-white px-5 py-4 text-sm text-slate-700"
          >
            <Smartphone
              className="mt-0.5 h-4 w-4 shrink-0 text-[#F97316]"
              aria-hidden="true"
            />
            <p className="leading-relaxed">
              <span className="font-semibold text-slate-900">
                {activeTip.label}:{' '}
              </span>
              {activeTip.steps}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
