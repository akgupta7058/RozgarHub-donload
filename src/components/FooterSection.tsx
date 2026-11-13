import { Download, ExternalLink } from 'lucide-react';
import { APP_CONFIG } from '../utils/rozgarData';

interface FooterSectionProps {
  onDownloadTrigger: () => void;
}

export function FooterSection({ onDownloadTrigger }: FooterSectionProps) {
  return (
    <>
      {/* Conversion Callout Band before Footer */}
      <section className="bg-[#1E3A8A] py-12 text-white sm:py-14">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 sm:px-6 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl text-balance">
              Abhi Download Karein aur Sahi Daam par Kaam Shuru Karein
            </h2>
            <p className="mt-2 text-sm text-blue-100 sm:text-base">
              Sirf 1.2 MB ka fast Android APK — Kanpur aur poore India me bilkul free.
            </p>
          </div>

          <a
            href={APP_CONFIG.apkDownloadUrl}
            download={APP_CONFIG.apkFileName}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onDownloadTrigger}
            className="cta-orange-glow inline-flex items-center gap-2.5 rounded-xl bg-[#F97316] px-6 py-3.5 text-base font-bold text-white transition-all duration-150 hover:bg-[#EA580C] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1E3A8A]"
          >
            <Download className="h-5 w-5" aria-hidden="true" />
            <span>{APP_CONFIG.apkButtonLabel}</span>
          </a>
        </div>
      </section>

      {/* Quiet Footer */}
      <footer className="border-t border-slate-200 bg-white py-8 text-slate-600">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
          <div className="flex items-center gap-3">
            <span className="font-display text-base font-extrabold text-[#1E3A8A]">
              {APP_CONFIG.appName}
            </span>
            <span aria-hidden="true" className="text-slate-300">
              ·
            </span>
            <p className="text-sm font-medium text-slate-600">
              {APP_CONFIG.footerCopy}
            </p>
          </div>

          <a
            href={APP_CONFIG.webVersionUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-[#1E3A8A] transition-colors hover:border-[#1E3A8A] hover:bg-blue-50 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E3A8A]"
          >
            <span>Open Web Version</span>
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </footer>
    </>
  );
}
