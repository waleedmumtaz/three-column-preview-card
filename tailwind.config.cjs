const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors: {
        cstm: {
          primary: {
            'bright-orange': 'hsl(31, 77%, 52%)',
            'dark-cyan': 'hsl(184, 100%, 22%)',
            'very-dark-cyan': 'hsl(179, 100%, 13%)',
          },
          neutral: {
            'transparent-white': 'hsla(0, 0%, 100%, 0.75)',
            'light-gray': 'hsl(0, 0%, 95%)',
          },
        },
      },
      fontFamily: {
        'big-shoulders-display': ['Big Shoulders Display', 'sans-serif'],
        'lexend-deca': ['Lexend Deca', 'sans-serif'],
      },
    },
  },

  plugins: [],
}

module.exports = config
