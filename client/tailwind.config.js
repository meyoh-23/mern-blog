/** @type {import('tailwindcss').Config} */
export const content = [
    "./index.html", 
    "./src/**/*.{js,jsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',

];
export const mode = "jit";
export const theme = {
    extend: {
        fontSize: {
            'h1': '3rem',
            'h2': '2.25rem',
            'h3': '1.1875rem',
            'h4': '1.5rem',
            'p': '1rem',
            'little': '0.8rem',
        },
        colors: {
        primary: "#5e0000",
        secondary: "#1e1c1f",
        textNormal: "#ff746e",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        bgButton: "#ffbf3c",
        bgButtonSecondary: "#ff6b66",
        heroColor: "#F5F5DC",
        heroTransparent: "rgba (50, 50, 50, 0.5)",
        },
        fontFamily: {
        raleway: ["'Montserrat',sans-serif"],
        },
        backgroundImage: {
            'hero-image': "url('./assets/image-7.jpg')",
            'mobile-hero': "url('./assets/mobile-hero.jpg')",
        }
    },
    screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
    },
};
export const plugins = [
    // eslint-disable-next-line no-undef
    require('flowbite/plugin'),
];

