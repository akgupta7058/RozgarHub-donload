import { useState } from 'react';
import { TopBar } from './components/TopBar';
import { HeroSection } from './components/HeroSection';
import { InstallGuideSection } from './components/InstallGuideSection';
import { FeaturesSection } from './components/FeaturesSection';
import { FooterSection } from './components/FooterSection';

export default function App() {
  const [downloadStarted, setDownloadStarted] = useState(false);

  const handleDownloadTrigger = () => {
    setDownloadStarted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <TopBar onDownloadTrigger={handleDownloadTrigger} />
      <main className="flex-1">
        <HeroSection
          downloadStarted={downloadStarted}
          onDownloadTrigger={handleDownloadTrigger}
        />
        <InstallGuideSection />
        <FeaturesSection />
      </main>
      <FooterSection onDownloadTrigger={handleDownloadTrigger} />
    </div>
  );
}
