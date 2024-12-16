/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{html,js,jsx,ts,tsx}", // Include various file types for Tailwind to scan
      "./public/index.html"              // Add this if you are using Vite or static HTML files
    ],
    theme: {
      extend: {
        // Custom styles and overrides can go here
      },
    },
    plugins: [],
  };
  