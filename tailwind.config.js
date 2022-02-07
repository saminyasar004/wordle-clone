module.exports = {
    content: [
        "./src/**/*.html",
        "./public/**/*.html",
        "./src/**/*.{js,jsx,ts,tsx,vue}",
    ],
    darkMode: "class", // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                para: ['"Poppins"', "sans-serif"],
                heading: ['"Montserrat"', "sans-serif"],
            },
            colors: {
                primary: "#1DD881",
                secondary: "#51ffae",
                primaryBg: "#033333",
                secondaryBg: "#1a5555",
                yellow: "#f0db4f",
                red: "#ff523b",
            },
            borderWidth: {
                "3px": "3px",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
