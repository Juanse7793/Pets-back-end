module.exports = {
 
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.fallback.fs = false
        config.resolve.fallback.dgram = false
      }
  
      return config
    },
    
  }