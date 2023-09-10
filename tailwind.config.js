const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Red Hat Text"],
                caveat: ["Caveat"],
            },
        },
    },
    darkMode: "class",
    plugins: [
        nextui({
            prefix: "nextui",
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
