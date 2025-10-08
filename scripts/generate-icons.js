const fs = require('fs');
const path = require('path');

const iconsDir = path.join(__dirname, '../src/components/Icon/icons');
const outputFile = path.join(__dirname, '../src/components/Icon/icons.js');

const files = fs.readdirSync(iconsDir).filter((f) => f.endsWith('.svg'));

// Generate import statements
const imports = files
    .map((file) => {
        const name = path.basename(file, '.svg');
        return `import ${name} from './icons/${file}?react';`;
    })
    .join('\n');

// Generate the `icons` object
const keys = files
    .map((file) => {
        const name = path.basename(file, '.svg');
        return `  '${name}': ${name}`;
    })
    .join(',\n');

const output = `${imports}\n\nexport const icons = {\n${keys}\n};\n`;

fs.writeFileSync(outputFile, output, 'utf8');
console.log(`Generated ${outputFile} with ${files.length} icons.`);
