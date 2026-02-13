/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary': 'rgba(38, 204, 182, 1)',
                'primary-hover': 'rgba(141, 243, 221, 1)',
            },
        },
    },
    plugins: [],
}
