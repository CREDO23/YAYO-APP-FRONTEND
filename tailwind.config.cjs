/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ['./index.html', './src/**/*.jsx'],
    theme: {
        extend: {
            colors: {
                'bleu': '#263A96',
                'jaune': '#F8CF33',
                'textbleu': '#000F55',
                'bleu-4':'rgba(0,15,85,.6)'
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms')
    ],
};
