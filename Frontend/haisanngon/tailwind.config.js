/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            height: {
                450: '450px',
                400: '400px',
                350: '350px',
                322: '322px',
                320: '320px',
                300: '300px',
                318: '318px',
                250: '250px',
                160: '160px',
                150: '150px',
                140: '140px',
                143: '134px',
                120: '120px',
                105: '105px',
                90: '90px',
                75: '75px',
                66: '66px',
                60: '60px',
                56: '56px',
                55: '55px',
                50: '50px',
                48: '48px',
                46: '46px',
                42: '42px',
                40: '40px',
                36: '36px',
                30: '30px',
                24: '24px',
            },
            width: {
                1200: '1200px',
                1000: '1000px',
                550: '550px',
                500: '500px',
                360: '360px',
                350: '350px',
                256: '256px',
                200: '200px',
                100: '100px',
                60: '60px',
                50: '50px',
            },
            left: {
                225: '225px',
            },
            padding: {
                '5px': '5px',
                '4px': '4px',
                '2px': '2px',
            },
            margin: {
                '4px': '4px',
            },
        },
    },
    plugins: [require('flowbite/plugin')],
};
