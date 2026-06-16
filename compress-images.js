import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesDir = path.join(__dirname, 'public', 'images', 'portfolio');

async function processImages() {
  try {
    const files = fs.readdirSync(imagesDir);
    
    for (const file of files) {
      if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')) {
        const inputPath = path.join(imagesDir, file);
        const outputName = file.replace(/\.(png|jpe?g)$/i, '.webp');
        const outputPath = path.join(imagesDir, outputName);
        
        console.log(`Processing ${file}...`);
        
        await sharp(inputPath)
          .webp({ quality: 80 })
          .toFile(outputPath);
          
        console.log(`Saved ${outputName}`);
        
        // Delete original file
        fs.unlinkSync(inputPath);
        console.log(`Deleted original ${file}`);
      }
    }
    console.log('All images compressed successfully!');
  } catch (error) {
    console.error('Error processing images:', error);
  }
}

processImages();
