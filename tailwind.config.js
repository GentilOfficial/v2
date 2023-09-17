/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                caveat: ["Caveat"],
            },
        },
    },
    darkMode: "class",
    plugins: [
        nextui({
            themes: {
                light: {
                    colors: {
                        primary: {
                            DEFAULT: "#548267",
                            foreground: "#ffffff",
                        },
                        focus: "#548267",
                    },
                },
                dark: {
                    colors: {
                        primary: {
                            DEFAULT: "#548267",
                            foreground: "#ffffff",
                        },
                        focus: "#548267",
                    },
                },
            },
        }),
    ],
};
