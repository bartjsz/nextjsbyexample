https://nextjs.org/docs/getting-started/installation

https://www.udemy.com/course/nextjs-by-example/learn/lecture/37952800?start=225#overview

https://github.com/mirkonasato/next-reviews

//
nested layouts
https://www.udemy.com/course/nextjs-by-example/learn/lecture/37952926#overview

server components and client using new app router 'use client' directive
https://www.udemy.com/course/nextjs-by-example/learn/lecture/37952796#overview
https://react.dev/reference/rsc/server-components

prefetch
https://www.udemy.com/course/nextjs-by-example/learn/lecture/37952810#overview

npm install --save-dev tailwindcss postcss autoprefixer

npx tailwindcss init --postcss

https://tailwindcss.com/docs/installation
https://nextjs.org/docs/app/building-your-application/styling/tailwind-css

<!-- /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} -->

add the tailwind directives 3 of them from site to global.css
@tailwind base;
@tailwind components;
@tailwind utilities;

for typescript this path compiler config would need to be done in tsconfig.

<!-- {
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
} -->

<!-- this page still bugged out but read below -->

C:\dev\manualinstallnext\app\page.tsx

//todo @ import not working module path alias tsconfig.json or jsconfig.json
// but create next app tool will automatically config path for you

// nextjs optimise image aspect ratio learn. and learn old css way for aspect ratio for website responsiveness

//
google fonts if you use their link code you are making request to their servers so this is a privacy concern
