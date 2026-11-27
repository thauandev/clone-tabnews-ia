import path from "node:path";

// ESLint: segue o exemplo "Running lint on staged files" da documentação do
// Next.js 16 (adaptado para ESM, já que o projeto usa "type": "module").
const buildEslintCommand = (filenames) =>
  `eslint --fix ${filenames
    .map((f) => `"${path.relative(process.cwd(), f)}"`)
    .join(" ")}`;

// Prettier: segue a seção "Pre-commit Hook" da documentação do Prettier.
// Os globs não se sobrepõem para evitar que ESLint e Prettier editem o mesmo
// arquivo ao mesmo tempo (ver "Task concurrency" no README do lint-staged).
const config = {
  "*.{js,jsx,mjs,cjs,ts,tsx}": [buildEslintCommand, "prettier --write"],
  "!(*.{js,jsx,mjs,cjs,ts,tsx})": "prettier --write --ignore-unknown",
};

export default config;
