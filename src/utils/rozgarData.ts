export interface InstallStep {
  id: number;
  stepNumber: string;
  title: string;
  description: string;
  iconKey: 'download' | 'settings' | 'check';
}

export interface KeyFeature {
  id: string;
  title: string;
  description: string;
  highlight: string;
  iconKey: 'grid' | 'shieldCheck' | 'phone' | 'lock';
}

export interface ConstructionCategory {
  id: string;
  name: string;
  hinglishTag: string;
  workExamples: string;
  group: 'construction' | 'utilities' | 'finishing';
}

export interface PhoneBrandTip {
  id: 'android' | 'xiaomi' | 'samsung' | 'vivo';
  label: string;
  steps: string;
}

export const APP_CONFIG = {
  appName: 'RozgarHub',
  subtitle: 'Sahi Kaam, Sahi Daam',
  tagline:
    'Apne Area ke Verified Rajmistri, Plumber, Electrician aur Labour se Seedha Judein — Bina Kisi Dalal ke!',
  apkButtonLabel: 'Download Android App (APK - 1.2 MB)',
  apkDownloadUrl: 'https://github.com',
  apkFileName: 'RozgarHub.apk',
  apkSize: '1.2 MB',
  trustItems: [
    '100% Free',
    'Verified Workers',
    'Direct Call & WhatsApp',
    'Safe & Lightweight (1.2 MB)',
  ],
  webVersionUrl: 'https://vercel.app',
  footerCopy: 'Made in Kanpur, India • © 2026 RozgarHub',
} as const;

export const INSTALL_STEPS: readonly InstallStep[] = [
  {
    id: 1,
    stepNumber: '01',
    title: 'APK Download Karein',
    description: "Upar diye gaye 'Download Android App' button par click karein.",
    iconKey: 'download',
  },
  {
    id: 2,
    stepNumber: '02',
    title: 'File Kholein & Allow Karein',
    description:
      "File download hone ke baad us par click karein (Agar phone 'Install unknown apps' puche toh 'Allow / Settings' on karein).",
    iconKey: 'settings',
  },
  {
    id: 3,
    stepNumber: '03',
    title: 'Install & Shuru Karein',
    description: "'Install' dabayein aur RozgarHub app chalana shuru karein!",
    iconKey: 'check',
  },
] as const;

export const PHONE_BRAND_TIPS: readonly PhoneBrandTip[] = [
  {
    id: 'android',
    label: 'General Android',
    steps:
      'Notification bar ya Chrome Downloads me RozgarHub.apk par tap karein → Settings → Allow from this source ON karein → Install dabayein.',
  },
  {
    id: 'xiaomi',
    label: 'Redmi / Xiaomi / Poco',
    steps:
      'File Manager ya Chrome se APK kholein → "For your security" popup me Settings par tap karein → "Allow from this source" toggle ON karein (10 sec wait) → OK & Install karein.',
  },
  {
    id: 'samsung',
    label: 'Samsung Galaxy',
    steps:
      'My Files > Downloads me jayein → RozgarHub.apk tap karein → Settings → Chrome / My Files ko Allow karein → Back aakar Install par click karein.',
  },
  {
    id: 'vivo',
    label: 'Vivo / Oppo / Realme',
    steps:
      'Files app me APK select karein → Allow Unknown App Installation on karein → Security scan ke baad Install dabayein.',
  },
] as const;

export const KEY_FEATURES: readonly KeyFeature[] = [
  {
    id: 'categories',
    title: '12 Home Construction Categories',
    description:
      'Rajmistri, Plumber, Electrician, Painter, Carpenter, Tile Mistri aur Labour samet ghar banane aur repair ke poore 12 kaam ek hi jagah.',
    highlight: '12 Categories Available',
    iconKey: 'grid',
  },
  {
    id: 'verified',
    title: '100% Verified Workers (No Dalal)',
    description:
      'Har worker ka mobile number aur basic KYC check hota hai. Koi contractor ya dalal commission nahi — seedha sahi daam par baat karein.',
    highlight: 'Zero Dalal Commission',
    iconKey: 'shieldCheck',
  },
  {
    id: 'direct-contact',
    title: 'Direct Call & WhatsApp',
    description:
      'App me worker ki profile dekhein aur ek click me seedha Phone Call ya WhatsApp par kaam aur rate fix karein.',
    highlight: '1-Tap Call & WhatsApp',
    iconKey: 'phone',
  },
  {
    id: 'safety',
    title: 'Customer Safety & Anti-Spam Protection',
    description:
      'Aapka phone number kisi random list me nahi bikta. Verified profiles, spam reporting aur safe discovery sirf 1.2 MB me.',
    highlight: 'Anti-Spam Protected',
    iconKey: 'lock',
  },
] as const;

export const CONSTRUCTION_CATEGORIES: readonly ConstructionCategory[] = [
  {
    id: 'rajmistri',
    name: 'Rajmistri (Mason)',
    hinglishTag: 'Chunai & Plaster',
    workExamples: 'Deewar chunai, plaster, lenter, ghar repair',
    group: 'construction',
  },
  {
    id: 'labour',
    name: 'Labour / Helper',
    hinglishTag: 'Beldaar & Mazdoor',
    workExamples: 'Samaan uthana, mitti khudai, site helper',
    group: 'construction',
  },
  {
    id: 'plumber',
    name: 'Plumber',
    hinglishTag: 'Nal & Pipe Fitting',
    workExamples: 'Tanki fitting, leakage repair, bathroom pipe',
    group: 'utilities',
  },
  {
    id: 'electrician',
    name: 'Electrician',
    hinglishTag: 'Bijli & Wiring',
    workExamples: 'House wiring, MCB board, inverter, fan fitting',
    group: 'utilities',
  },
  {
    id: 'carpenter',
    name: 'Carpenter (Badhai)',
    hinglishTag: 'Lakdi & Furniture',
    workExamples: 'Darwaza, khidki, almari, modular kitchen',
    group: 'finishing',
  },
  {
    id: 'painter',
    name: 'Painter & Putty',
    hinglishTag: 'Rang & Putty',
    workExamples: 'Wall putty, primer, interior & exterior paint',
    group: 'finishing',
  },
  {
    id: 'tile-marble',
    name: 'Tile & Marble Mistri',
    hinglishTag: 'Flooring & Stone',
    workExamples: 'Floor tiles, granite kitchen slab, bathroom tiles',
    group: 'finishing',
  },
  {
    id: 'welder',
    name: 'Welding & Fabrication',
    hinglishTag: 'Lohe ka Kaam',
    workExamples: 'Main gate, grill, railing, tin shed fabrication',
    group: 'construction',
  },
  {
    id: 'pop-ceiling',
    name: 'POP & False Ceiling',
    hinglishTag: 'Gypsum & Design',
    workExamples: 'False ceiling, cornice moulding, wall design',
    group: 'finishing',
  },
  {
    id: 'waterproofing',
    name: 'Waterproofing Expert',
    hinglishTag: 'Seelan & Chhat Repair',
    workExamples: 'Chhat leakage treatment, damp wall chemical coat',
    group: 'construction',
  },
  {
    id: 'ac-appliance',
    name: 'AC & Motor Repair',
    hinglishTag: 'Cooling & Appliances',
    workExamples: 'AC service, gas refill, cooler & geyser repair',
    group: 'utilities',
  },
  {
    id: 'borewell',
    name: 'Borewell & Submersible',
    hinglishTag: 'Paani & Pump',
    workExamples: 'Submersible pump fitting, motor winding, borewell',
    group: 'utilities',
  },
] as const;

export function filterCategories(
  categories: readonly ConstructionCategory[],
  query: string,
  group: 'all' | ConstructionCategory['group'] = 'all'
): ConstructionCategory[] {
  const normalized = query.trim().toLowerCase();
  return categories.filter((category) => {
    const matchesGroup = group === 'all' || category.group === group;
    if (!matchesGroup) return false;
    if (!normalized) return true;
    return (
      category.name.toLowerCase().includes(normalized) ||
      category.hinglishTag.toLowerCase().includes(normalized) ||
      category.workExamples.toLowerCase().includes(normalized)
    );
  });
}
