const fs = require('fs');
const path = require('path');

console.log('🚀 Starting OrphiChain PWA Icon Generation...');

// OrphiChain logo SVG with exact brand design
const createOrphiChainSVG = (size) => `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGradient${size}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0B1426"/>
      <stop offset="50%" style="stop-color:#1A1A2E"/>
      <stop offset="100%" style="stop-color:#0B1426"/>
    </linearGradient>
    <linearGradient id="logoGradient${size}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#00d4ff"/>
      <stop offset="50%" style="stop-color:#7b2cbf"/>
      <stop offset="100%" style="stop-color:#ff6b35"/>
    </linearGradient>
  </defs>
  
  <rect width="${size}" height="${size}" rx="${size * 0.15}" ry="${size * 0.15}" fill="url(#bgGradient${size})"/>
  
  <g transform="translate(${size * 0.2}, ${size * 0.2}) scale(${size * 0.006})">
    <polygon points="50,5 90,25 90,65 50,85 10,65 10,25" 
             fill="none" 
             stroke="url(#logoGradient${size})" 
             stroke-width="3"/>
    
    <polygon points="50,20 70,40 50,60 30,40" 
             fill="url(#logoGradient${size})" 
             opacity="0.8"/>
    
    <circle cx="50" cy="40" r="8" 
            fill="#00d4ff"/>
    
    <line x1="50" y1="5" x2="50" y2="20" 
          stroke="#00d4ff" 
          stroke-width="2" 
          opacity="0.7"/>
    <line x1="50" y1="60" x2="50" y2="85" 
          stroke="#00d4ff" 
          stroke-width="2" 
          opacity="0.7"/>
    <line x1="10" y1="25" x2="30" y2="40" 
          stroke="#7b2cbf" 
          stroke-width="2" 
          opacity="0.7"/>
    <line x1="70" y1="40" x2="90" y2="25" 
          stroke="#ff6b35" 
          stroke-width="2" 
          opacity="0.7"/>
  </g>
</svg>`;

// Icon sizes for PWA
const ICON_SIZES = [72, 96, 128, 192, 512];

// Create icons directory
const iconsDir = path.join(__dirname, 'public', 'icons');
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
  console.log('📁 Created public/icons directory');
}

// Generate SVG files
ICON_SIZES.forEach(size => {
  const svgContent = createOrphiChainSVG(size);
  const filename = `icon-${size}x${size}.svg`;
  const filepath = path.join(iconsDir, filename);
  
  fs.writeFileSync(filepath, svgContent);
  console.log(`✅ Generated ${filename}`);
});

console.log('\n🎨 OrphiChain PWA icons generated successfully!');
console.log('📁 Location: public/icons/');
console.log('\n📝 Next: Convert SVG files to PNG format for PWA compatibility');
