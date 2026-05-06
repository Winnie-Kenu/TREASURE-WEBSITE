const fs = require('fs');

function hexToRgb(hexStr) {
    hexStr = hexStr.replace(/^#/, '');
    if (hexStr.length === 6) {
        return `${parseInt(hexStr.substring(0, 2), 16)} ${parseInt(hexStr.substring(2, 4), 16)} ${parseInt(hexStr.substring(4, 6), 16)}`;
    }
    return hexStr; // return as is if not hex
}

// Update index.css
let content = fs.readFileSync('src/index.css', 'utf8');

// Find all hex colors in the file and replace them with RGB format
let newContent = content.replace(/(--[a-zA-Z0-9_-]+:\s*)(#[0-9a-fA-F]{6});/g, (match, prefix, hexVal) => {
    const rgbVal = hexToRgb(hexVal);
    return `${prefix}${rgbVal};`;
});

fs.writeFileSync('src/index.css', newContent);
console.log("Updated index.css");

// Update tailwind.config.js
let twContent = fs.readFileSync('tailwind.config.js', 'utf8');

let newTwContent = twContent.replace(/"([^"]+)":\s*"var\(--[^"]+\)",/g, (match, colorName) => {
    return `"${colorName}": "rgb(var(--${colorName}) / <alpha-value>)",`;
});

fs.writeFileSync('tailwind.config.js', newTwContent);
console.log("Updated tailwind.config.js");
