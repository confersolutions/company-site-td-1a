const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);
const mkdir = promisify(fs.mkdir);

// Configuration
const IMAGE_DIRS = [
  'public/images',
  'public/media'
];
const OUTPUT_DIR = 'public/optimized';
const QUALITY = 85;
const WIDTHS = [640, 768, 1024, 1280, 1536];

// Ensure output directory exists
async function ensureDir(dir) {
  try {
    await mkdir(dir, { recursive: true });
  } catch (err) {
    if (err.code !== 'EEXIST') throw err;
  }
}

// Process a single image
async function processImage(filePath, outputPath) {
  try {
    const ext = path.extname(filePath).toLowerCase();
    const baseName = path.basename(filePath, ext);
    const outputBasePath = path.join(outputPath, baseName);

    // Skip if already processed
    if (ext === '.webp' || ext === '.svg') return;

    // Create WebP version
    const webpPath = `${outputBasePath}.webp`;
    if (!fs.existsSync(webpPath)) {
      await sharp(filePath)
        .webp({ quality: QUALITY })
        .toFile(webpPath);
      console.log(`Created: ${webpPath}`);
    }

    // Create responsive versions
    for (const width of WIDTHS) {
      const responsivePath = `${outputBasePath}-${width}w.webp`;
      if (!fs.existsSync(responsivePath)) {
        await sharp(filePath)
          .resize({ width })
          .webp({ quality: QUALITY })
          .toFile(responsivePath);
        console.log(`Created: ${responsivePath}`);
      }
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
  }
}

// Recursively process all files in a directory
async function processDirectory(directory, outputBase) {
  const files = await readdir(directory);
  
  for (const file of files) {
    const filePath = path.join(directory, file);
    const fileStat = await stat(filePath);
    
    if (fileStat.isDirectory()) {
      // Process subdirectories
      const relativePath = path.relative(directory, filePath);
      const outputPath = path.join(outputBase, relativePath);
      await ensureDir(outputPath);
      await processDirectory(filePath, outputPath);
    } else if (/\.(jpg|jpeg|png)$/i.test(file)) {
      // Process image files
      const relativePath = path.relative('public', path.dirname(filePath));
      const outputPath = path.join(outputBase, relativePath);
      await ensureDir(outputPath);
      await processImage(filePath, outputPath);
    }
  }
}

// Main function
async function main() {
  try {
    await ensureDir(OUTPUT_DIR);
    
    for (const dir of IMAGE_DIRS) {
      if (fs.existsSync(dir)) {
        console.log(`Processing directory: ${dir}`);
        await processDirectory(dir, OUTPUT_DIR);
      }
    }
    
    console.log('\nImage optimization complete!');
  } catch (error) {
    console.error('Error during image optimization:', error);
    process.exit(1);
  }
}

// Run the script
main();
