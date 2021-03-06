module.exports = {
    publicPath:process.env.NODE_ENV === 'production'?'/pao-motoring':'/',
  lintOnSave: false,
    css:{
        loaderOptions:{
            scss:{
                prependData:`@import "@/assets/scss/_mixin.scss";`
            }
        }
    },
    devServer: {
        port:1104,
    }
}
