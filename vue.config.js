module.exports = {
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
