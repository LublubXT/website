/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                darkaccent: "#453430",
            },
            fontFamily: {
                space: ["var(--font-space-grotesk)"],
                poppins: ["var(--font-poppins)"],
            },
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: ["emerald"],
    },
};
