const content = `        "surface-container-highest": "#262626",
        "outline-variant": "#484847",
        "tertiary": "#f5ffc3",
        "tertiary-dim": "#d5ee68",
        "tertiary-fixed": "#e3fd74",
        "error-dim": "#d53d18",
        "on-background": "#ffffff",
        "tertiary-container": "#def76f",
        "secondary-container": "#454747",
        "on-secondary": "#505252",
        "on-primary": "#655400",
        "inverse-surface": "#fcf9f8",
        "surface-container-lowest": "#000000",
        "on-primary-fixed-variant": "#665500",
        "on-surface-variant": "#adaaaa",
        "secondary-dim": "#d4d4d4",
        "primary-fixed": "#ffd709",
        "surface-bright": "#2c2c2c",
        "primary-container": "#ffd709",
        "on-secondary-fixed-variant": "#5a5c5c",
        "surface-container-high": "#20201f",
        "on-secondary-container": "#d0d0d0",
        "on-tertiary": "#566600",
        "surface-container": "#1a1a1a",
        "outline": "#767575",
        "surface-dim": "#0e0e0e",
        "error-container": "#b92902",
        "surface-variant": "#262626",
        "on-surface": "#ffffff",
        "on-tertiary-container": "#4e5d00",
        "surface-tint": "#ffe792",
        "on-error": "#450900",
        "secondary": "#e2e2e2",
        "secondary-fixed-dim": "#d4d4d4",
        "on-tertiary-fixed-variant": "#5b6b00",
        "background": "#0e0e0e",
        "primary-dim": "#efc900",
        "primary-fixed-dim": "#efc900",
        "surface": "#0e0e0e",
        "inverse-on-surface": "#565555",
        "on-error-container": "#ffd2c8",
        "tertiary-fixed-dim": "#d5ee68",
        "on-primary-fixed": "#453900",
        "inverse-primary": "#705e00",
        "on-tertiary-fixed": "#414d00",
        "primary": "#ffe792",
        "error": "#ff7351",
        "on-primary-container": "#5b4b00",
        "on-secondary-fixed": "#3e4040",
        "secondary-fixed": "#e2e2e2",
        "surface-container-low": "#131313"`;

const lines = content.trim().split('\n');
const colors = {};

for (const line of lines) {
    const match = line.match(/"([^"]+)":\s*"([^"]+)"/);
    if (match) {
        colors[match[1]] = match[2];
    }
}

console.log('--- TAILWIND CONFIG ---');
for (const [k, v] of Object.entries(colors)) {
    console.log(`        "${k}": "var(--${k})",`);
}

console.log('\n--- CSS DARK ---');
for (const [k, v] of Object.entries(colors)) {
    console.log(`    --${k}: ${v};`);
}
