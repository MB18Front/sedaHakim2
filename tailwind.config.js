/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/app/**/*.{js,jsx}",
  ],
  theme: {
    screens:{
      'sm' : '1150px',
      'mobile' : '907px'
    },
    extend: {
      colors: {
        "icon-blue" : "#58C5C7",
        'el-gold' : '#E8CF75',
        "main-color" : "#F3F4F6",
        "pink-back" : "#FFFAE7"
      },
    },
  },
  plugins: [],
};
