const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Ensure optimized directory exists
const outputDir = path.join(process.cwd(), 'public/optimized');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Configuration for image optimization
const imageConfigs = [
  {
    input: path.join(process.cwd(), 'public/optimized/hero-image.jpg'),
    outputs: [
      { width: 640, suffix: '-640w' },
      { width: 768, suffix: '-768w' },
      { width: 1024, suffix: '-1024w' },
      { width: 1280, suffix: '-1280w' },
      { width: 1536, suffix: '-1536w' },
    ]
  }
];

// Optimize images
async function optimizeImages() {
  for (const config of imageConfigs) {
    const { input, outputs } = config;
    const ext = path.extname(input);
    const baseName = path.basename(input, ext);
    
    // Create WebP versions
    for (const output of outputs) {
      const outputPath = path.join(
        outputDir,
        `${baseName}${output.suffix}.webp`
      );
      
      try {
        await sharp(input)
          .resize({ width: output.width })
          .webp({ quality: 80 })
          .toFile(outputPath);
        
        console.log(`Created: ${outputPath}`);
      } catch (error) {
        console.error(`Error processing ${input}:`, error);
      }
    }
  }
  
  console.log('Image optimization complete!');
}

// Run the optimization
optimizeImages().catch(console.error);
