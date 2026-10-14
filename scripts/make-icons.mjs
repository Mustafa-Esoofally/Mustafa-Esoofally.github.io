import sharp from 'sharp';
const svg = 'public/favicon.svg';
for (const [name, size] of [['favicon-32.png',32],['apple-touch-icon.png',180],['icon-192.png',192],['icon-512.png',512]]) {
  await sharp(svg, { density: 1200 }).resize(size, size).png().toFile('public/' + name);
}
// maskable: full-bleed background, logo in safe zone
await sharp({ create: { width: 512, height: 512, channels: 4, background: '#0d1424' } })
  .composite([{ input: await sharp(svg, { density: 1200 }).resize(360, 360).png().toBuffer(), gravity: 'center' }])
  .png().toFile('public/icon-maskable-512.png');
console.log('icons ok');
// iOS rounds corners itself, so the touch icon must be full-bleed (no transparent corners).
await sharp('public/icon-maskable-512.png').resize(180, 180).png().toFile('public/apple-touch-icon.png');
console.log('apple-touch-icon full-bleed');
