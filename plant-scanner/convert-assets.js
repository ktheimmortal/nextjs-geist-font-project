const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

async function convertSvgToPng() {
  try {
    const files = [
      { input: 'icon.svg', output: 'icon.png', width: 1024, height: 1024 },
      { input: 'splash.svg', output: 'splash.png', width: 1242, height: 2436 },
      { input: 'favicon.svg', output: 'favicon.png', width: 32, height: 32 }
    ];

    for (const file of files) {
      const inputPath = path.join(__dirname, 'assets', file.input);
      const outputPath = path.join(__dirname, 'assets', file.output);
      
      const data = await fs.readFile(inputPath);
      await sharp(data)
        .resize(file.width, file.height)
        .png()
        .toFile(outputPath);
      
      console.log(`Converted ${file.input} to ${file.output}`);
    }
  } catch (error) {
    console.error('Error converting files:', error);
  }
}

convertSvgToPng();
