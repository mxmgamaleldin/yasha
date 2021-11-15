module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        'headline': ['3.5rem', {
          letterSpacing: '-0.005em',
          lineHeight: '1.0em',
        }],
      },      
      colors: {
        cyanblack: '#010B13',
        darkGrayBG: '#1F2225',
        lightGrayBG: '#FBFBFD',
        footerGray: '#F9FAFB',
        syntaxOrange: '#E577A4',
        syntaxBlue: '#AFE5DD',
        syntaxGreen: '#A395D7',
        buttonBlue: '#0271E3',
        buttonBlueLight: '#137CE5',
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
