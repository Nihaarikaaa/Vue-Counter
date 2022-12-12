module.exports = {
  devServer: {
    port: 5000,
    // disableHostCheck: true,
    // transpileDependencies: true,
    //   clientLogLevel: 'info'
  },
   publicPath: `/${process.env.VUE_APP_HASH}/`,
  //publicPath: `/`,
};
