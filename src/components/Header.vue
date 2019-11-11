<template>
    <header class="header">
        <img class="logo" src="../assets/logo.png" alt="logo"/>
        <el-menu router :default-active="$route.path" mode="horizontal" text-color="#000">
            <el-menu-item index="/">首页</el-menu-item>
            <el-menu-item index="/about">公司概况</el-menu-item>
            <el-menu-item index="/cooperation">供应商合作</el-menu-item>
            <el-menu-item index="/hr">人才招聘</el-menu-item>
            <el-menu-item index="/contact">联系我们</el-menu-item>
        </el-menu>
    </header>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style lang="scss">
    header.header{
        @include flex(center);
        img.logo{
            width: 200px;
            margin: 20px 150px 20px 0;
        }
        .el-menu.el-menu--horizontal{
            border: none;
        }
    }
</style>