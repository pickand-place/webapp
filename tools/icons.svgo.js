module.exports = {
  plugins: [
    {
      name: 'convertColors',
      params: {
        currentColor: true,
      },
    },
    {
      name: 'addAttributesToSVGElement',
      params: {
        attributes: {
          fill: 'currentColor',
        },
      },
    },
    {
      name: 'removeDimensions',
    },
  ],
}
