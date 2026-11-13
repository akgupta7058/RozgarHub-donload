import test from 'node:test';
import assert from 'node:assert/strict';
import {
  APP_CONFIG,
  CONSTRUCTION_CATEGORIES,
  INSTALL_STEPS,
  KEY_FEATURES,
  filterCategories,
} from './rozgarData';

test('APP_CONFIG matches exact download URL, web URL, and branding', () => {
  assert.equal(APP_CONFIG.appName, 'RozgarHub');
  assert.equal(APP_CONFIG.subtitle, 'Sahi Kaam, Sahi Daam');
  assert.equal(APP_CONFIG.apkDownloadUrl, 'https://github.com');
  assert.equal(APP_CONFIG.webVersionUrl, 'https://vercel.app');
  assert.equal(APP_CONFIG.apkButtonLabel, 'Download Android App (APK - 1.2 MB)');
  assert.equal(APP_CONFIG.footerCopy, 'Made in Kanpur, India • © 2026 RozgarHub');
});

test('INSTALL_STEPS has exactly 3 steps in sequence', () => {
  assert.equal(INSTALL_STEPS.length, 3);
  assert.deepEqual(
    INSTALL_STEPS.map((s) => s.id),
    [1, 2, 3]
  );
  assert.ok(INSTALL_STEPS[0].description.includes('Download Android App'));
  assert.ok(INSTALL_STEPS[1].description.includes('Install unknown apps'));
  assert.ok(INSTALL_STEPS[2].description.includes('RozgarHub'));
});

test('KEY_FEATURES includes all 4 required highlights', () => {
  assert.equal(KEY_FEATURES.length, 4);
  const titles = KEY_FEATURES.map((f) => f.title);
  assert.ok(titles.includes('12 Home Construction Categories'));
  assert.ok(titles.includes('100% Verified Workers (No Dalal)'));
  assert.ok(titles.includes('Direct Call & WhatsApp'));
  assert.ok(titles.includes('Customer Safety & Anti-Spam Protection'));
});

test('CONSTRUCTION_CATEGORIES has exactly 12 unique trades', () => {
  assert.equal(CONSTRUCTION_CATEGORIES.length, 12);
  const ids = new Set(CONSTRUCTION_CATEGORIES.map((c) => c.id));
  assert.equal(ids.size, 12);
});

test('filterCategories filters accurately by Hinglish query and group', () => {
  const all = filterCategories(CONSTRUCTION_CATEGORIES, '', 'all');
  assert.equal(all.length, 12);

  const mason = filterCategories(CONSTRUCTION_CATEGORIES, 'rajmistri', 'all');
  assert.equal(mason.length, 1);
  assert.equal(mason[0].id, 'rajmistri');

  const utilities = filterCategories(CONSTRUCTION_CATEGORIES, '', 'utilities');
  assert.equal(utilities.length, 4);

  const empty = filterCategories(CONSTRUCTION_CATEGORIES, 'xyznonexistent', 'all');
  assert.equal(empty.length, 0);
});
