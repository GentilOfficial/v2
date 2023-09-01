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
                        background: {
                            DEFAULT: "#ffffff",
                            900: "#f8f8f8",
                        },
                        primary: {
                            DEFAULT: "#647C64",
                            foreground: "#ecedee",
                        },
                        secondary: {
                            DEFAULT: "#6d31A8",
                            foreground: "#ecedee",
                        },
                        danger: {
                            DEFAULT: "#ce2b37",
                            foreground: "#ecedee",
                        },
                        warning: {
                            DEFAULT: "#fc9535",
                            foreground: "#ecedee",
                        },
                        success: {
                            DEFAULT: "#53bd5a",
                            foreground: "#ecedee",
                        },
                        focus: "#647c64",
                    },
                },
                dark: {
                    colors: {
                        background: {
                            DEFAULT: "#000000",
                            900: "#08080b",
                        },
                        primary: {
                            DEFAULT: "#647c64",
                            foreground: "#ecedee",
                        },
                        secondary: {
                            DEFAULT: "#893dd4",
                            foreground: "#ecedee",
                        },
                        danger: {
                            DEFAULT: "#ce2b37",
                            foreground: "#ecedee",
                        },
                        warning: {
                            DEFAULT: "#fc9535",
                            foreground: "#ecedee",
                        },
                        success: {
                            DEFAULT: "#53bd5a",
                            foreground: "#ecedee",
                        },
                        focus: "#647c64",
                    },
                },
            },
        }),
    ],
};
