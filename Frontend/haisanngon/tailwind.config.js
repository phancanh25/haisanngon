/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            height: {
                140: '140px',
                105: '105px',
                90: '90px',
                75: '75px',
                66: '66px',
                55: '55px',
                50: '50px',
                46: '46px',
                42: '42px',
                40: '40px',
                36: '36px',
                30: '30px',
                24: '24px',
            },
            width: {
                1200: '1200px',
                200: '198px',
                100: '100px',
            },
            left: {
                225: '225px',
            },
        },
    },
    plugins: [require('flowbite/plugin')],
};
