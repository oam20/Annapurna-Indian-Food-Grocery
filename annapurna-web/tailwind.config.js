/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                serif: ['Playfair Display', 'serif'],
                sans: ['Inter', 'sans-serif'], // Ensuring a clean grotesk-like sans
            },
            colors: {
                'brand-cream': '#FAF7F2',
                'brand-text': '#1E1E1E',
                'brand-muted': '#6B6B6B',
                'brand-border': '#D9D9D9',
                'brand-green': '#6BCF8E',
            }
        },
    },
    plugins: [],
}
