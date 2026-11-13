import { Download } from 'lucide-react';
import { APP_CONFIG } from '../utils/rozgarData';

interface TopBarProps {
  onDownloadTrigger: () => void;
}

export function TopBar({ onDownloadTrigger }: TopBarProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-8 px-4 py-3.5 sm:px-6">
        <a
          href="#top"
          className="font-display text-xl font-extrabold tracking-tight text-[#1E3A8A] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] focus-visible:ring-offset-2 rounded"
        >
          {APP_CONFIG.appName}
        </a>

        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600"
        >
          <a
            href="#install-guide"
            className="hover:text-[#1E3A8A] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Install Guide
          </a>
          <a
            href="#features"
            className="hover:text-[#1E3A8A] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Features
          </a>
          <a
            href="#categories"
            className="hover:text-[#1E3A8A] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            12 Categories
          </a>
          <a
            href={APP_CONFIG.webVersionUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#1E3A8A] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Web Version
          </a>
        </nav>

        <div className="flex items-center shrink-0">
          <a
            href={APP_CONFIG.apkDownloadUrl}
            download={APP_CONFIG.apkFileName}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onDownloadTrigger}
            className="inline-flex items-center gap-2 rounded-lg bg-[#F97316] px-4 py-2 text-sm font-semibold text-white transition-all duration-150 hover:bg-[#EA580C] active:scale-[0.99] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E3A8A] focus-visible:ring-offset-2"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            <span>Download APK</span>
          </a>
        </div>
      </div>
    </header>
  );
}
