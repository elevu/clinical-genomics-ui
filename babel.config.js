module.exports = {
  presets: [
    [
      '@babel/preset-env',
      '@babel/preset-react',
      {
        targets: {
          node: '8.10',
        },
        debug: false,
      },
    ],
  ],
  ignore: ['node_modules'],
  plugins: ['@babel/plugin-transform-modules-commonjs'],
}
