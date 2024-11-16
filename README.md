리액트 + 타입스크립트  + 샤드신 + scss 조합으로 세팅했습니다. 
# 프로젝트 환경설정

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

### index.css

@tailwind base;
@tailwind components;
@tailwind utilities;

### tailwind.config.js

/** @type {import('tailwindcss').Config} \*/
export default {
content: [],
content: ['./index.html', './src/**/\*.{ts,tsx,js,jsx}'],
theme: {
extend: {},
},
plugins: [],
};

### tsconfig.json

{
"files": [],
"references": [
{ "path": "./tsconfig.app.json" },
{ "path": "./tsconfig.node.json" }
],
"compilerOptions": {
"baseUrl": ".",
"paths": {
"@/_": ["./src/_"]
}
}
}

### tsconfig.app.json

{

"compilerOptions": {
"tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
"target": "ES2020",
"useDefineForClassFields": true,
"lib": ["ES2020", "DOM", "DOM.Iterable"],
"module": "ESNext",
"skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "Bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true,

    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }

},
"include": ["src"]
}

### 설치

npm i -D @types/node

### vite.config.ts

import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
// https://vite.dev/config/
export default defineConfig({
plugins: [react()],
resolve: {
alias: {
'@': path.resolve(\_\_dirname, 'src'),
},
},
});

### 설치

npx shadcn@latest init
npx shadcn@latest add avatar
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add dialog
npx shadcn@latest add input
npx shadcn@latest add pagination
npx shadcn@latest add separator
npx shadcn@latest add skeleton

npm install react-router-dom

npm install -D sass-embedded
