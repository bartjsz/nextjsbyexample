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
