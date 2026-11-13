import { useState } from 'react';
import { CheckCircle2, Download, HardHat, PhoneCall, ShieldCheck } from 'lucide-react';
import heroWorkerImage from '../assets/images/rozgarhub_hero_workers_1794569120504.jpg';
import { APP_CONFIG } from '../utils/rozgarData';

interface HeroSectionProps {
  downloadStarted: boolean;
  onDownloadTrigger: () => void;
}

export function HeroSection({ downloadStarted, onDownloadTrigger }: HeroSectionProps) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-br from-[#1E3A8A] via-[#1B337A] to-[#132661] text-white"
    >
      {/* Subtle architectural grid lines for structural craft texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Brand Badge, Headline, Tagline, Primary Glowing CTA */}
          <div className="flex flex-col justify-center lg:col-span-7">
            {/* App Logo Badge + Name */}
            <div className="flex items-center gap-4">
              <div
                aria-hidden="true"
                className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1E3A8A] via-[#2563EB] to-[#F97316] p-0.5 shadow-lg ring-1 ring-white/25"
              >
                <div className="flex h-full w-full items-center justify-center rounded-[14px] bg-gradient-to-br from-[#1E3A8A] to-[#F97316]">
                  <span className="font-display text-2xl font-extrabold tracking-tight text-white">
                    RH
                  </span>
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold tracking-wider text-orange-300">
                  {APP_CONFIG.subtitle}
                </p>
                <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl text-balance">
                  {APP_CONFIG.appName}
                </h1>
              </div>
            </div>

            {/* Hinglish Value Proposition Tagline */}
            <p className="mt-6 max-w-2xl text-xl font-semibold leading-snug text-blue-50 sm:text-2xl text-balance">
              {APP_CONFIG.tagline}
            </p>

            <p className="mt-3 max-w-xl text-base leading-relaxed text-blue-100/90">
              Kanpur aur poore Bharat me ghar banane, marammat, bijli, plumbing aur painting ke liye bharosemand local mistri aur labour ab seedha aapke phone par.
            </p>

            {/* Primary Glowing Download Action */}
            <div className="mt-8 flex flex-col items-start gap-4">
              <a
                href={APP_CONFIG.apkDownloadUrl}
                download={APP_CONFIG.apkFileName}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onDownloadTrigger}
                className="cta-orange-glow inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#F97316] px-4 py-4 text-center text-[15px] font-bold text-white transition-all duration-150 hover:-translate-y-0.5 hover:bg-[#EA580C] active:translate-y-0 whitespace-nowrap sm:w-auto sm:gap-3 sm:px-8 sm:text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1E3A8A]"
              >
                <Download className="h-5 w-5 shrink-0" aria-hidden="true" />
                <span>{APP_CONFIG.apkButtonLabel}</span>
              </a>

              {/* Immediate visual confirmation when clicked */}
              {downloadStarted && (
                <div
                  role="status"
                  aria-live="polite"
                  className="flex items-start gap-2.5 rounded-lg border border-orange-300/40 bg-white/10 px-4 py-3 text-sm text-white backdrop-blur-sm"
                >
                  <CheckCircle2
                    className="mt-0.5 h-4 w-4 shrink-0 text-orange-300"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-semibold">
                      Download shuru ho gaya hai!
                    </p>
                    <p className="mt-0.5 text-xs text-blue-100">
                      File save hone ke baad{' '}
                      <a
                        href="#install-guide"
                        className="font-semibold text-orange-300 underline underline-offset-2 hover:text-orange-200"
                      >
                        niche 3-step install guide
                      </a>{' '}
                      follow karein.
                    </p>
                  </div>
                </div>
              )}

              {/* Clean unboxed trust line (Zero-Pill discipline) */}
              <p
                aria-label="App trust highlights"
                className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-medium text-blue-100/95 sm:text-sm"
              >
                {APP_CONFIG.trustItems.map((item, idx) => (
                  <span key={item} className="inline-flex items-center gap-2.5">
                    <span>{item}</span>
                    {idx < APP_CONFIG.trustItems.length - 1 && (
                      <span aria-hidden="true" className="text-orange-300">
                        •
                      </span>
                    )}
                  </span>
                ))}
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Craftsman Visual + Clean White App Preview Card */}
          <div className="flex flex-col lg:col-span-5">
            <div className="relative flex flex-1 flex-col overflow-hidden rounded-2xl border border-white/15 bg-white shadow-xl">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 lg:h-full lg:min-h-[320px]">
                {!imageFailed ? (
                  <img
                    src={heroWorkerImage}
                    alt="Verified Indian electrician and home construction specialist working on residential wiring"
                    referrerPolicy="no-referrer"
                    onError={() => setImageFailed(true)}
                    className="h-full w-full object-cover object-center"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-orange-50 p-8 text-center text-[#1E3A8A]">
                    <HardHat className="h-12 w-12 text-[#F97316]" aria-hidden="true" />
                    <p className="mt-3 font-display text-lg font-bold">
                      Verified Local Skilled Workers
                    </p>
                    <p className="mt-1 text-sm text-slate-600">
                      Kanpur & across India
                    </p>
                  </div>
                )}

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950/90 via-slate-950/55 to-transparent"
                />

                <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3 text-white">
                  <div>
                    <p className="text-xs font-medium text-orange-200">
                      Kanpur & Across India
                    </p>
                    <p className="font-display text-base font-bold">
                      Seedha Mistri se Baat Karein
                    </p>
                  </div>
                  <span className="font-mono text-xs font-semibold tabular-nums text-white whitespace-nowrap shrink-0">
                    1.2 MB APK
                  </span>
                </div>
              </div>

              {/* Clean White Footer Strip Inside Card */}
              <div className="grid grid-cols-2 divide-x divide-slate-200 border-t border-slate-200 bg-white text-slate-900">
                <div className="flex items-center gap-3 px-4 py-3.5">
                  <ShieldCheck
                    className="h-5 w-5 shrink-0 text-[#1E3A8A]"
                    aria-hidden="true"
                  />
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-slate-500">Trust</p>
                    <p className="truncate text-sm font-semibold text-slate-900">
                      0% Dalal Charge
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 px-4 py-3.5">
                  <PhoneCall
                    className="h-5 w-5 shrink-0 text-[#F97316]"
                    aria-hidden="true"
                  />
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-slate-500">Contact</p>
                    <p className="truncate text-sm font-semibold text-slate-900">
                      Call & WhatsApp
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
