module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/randomuser/" : "/",
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
  },
};
