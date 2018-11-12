module.exports = {
  configureWebpack: {
    output: {
      libraryExport: 'default'
    }
  },
  chainWebpack: config => {
    if (config.get('mode') !== 'development') {
      config.externals({
        ...config.get('externals'),
        ajv: 'ajv',
        buefy: 'buefy'
      })
    }
  }
}
