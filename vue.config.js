module.exports = {
  chainWebpack: config => {
    if (config.get('mode') !== 'development') {
      config.externals({
        ...config.get('externals'),
        ajv: {
          amd: 'ajv',
          commonjs: 'ajv',
          commonjs2: 'ajv',
          root: 'Ajv'
        },
        buefy: {
          amd: 'buefy',
          commonjs: 'buefy',
          commonjs2: 'buefy',
          root: 'Buefy'
        }
      })
    }
  }
}
