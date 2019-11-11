<template>
  <div id="app">
    <Header></Header>
    <router-view />
    <Footer></Footer>
    <el-backtop target="#app"></el-backtop>
  </div>
</template>

<style lang="scss">
  #app{
    height: 100vh;
    overflow-y: scroll;
    background: #fff;
  }
</style>
<script>
  import Header from "./components/Header";
  import Footer from "./components/Footer";
  export default {
    components: {Footer, Header}
  }
</script>