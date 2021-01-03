let path = require('path')

function rewireJquery(config, env) {
  config.resolve = {
    alias: {
      react: path.resolve('./node_modules/react')
    }
  }
  return config
}
module.exports = function override(config, env) {
  //do stuff with the webpack config...
  // config = rewirePreact(config, env);
  if (env === 'production') {
    config = rewireJquery(config, env)
  }
  return config
}
