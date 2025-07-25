// postcss.config.cjs
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {}, // Make sure this is correct from your previous fix
    'autoprefixer': {}, // Include other PostCSS plugins if you use them (e.g., autoprefixer)
  },
};