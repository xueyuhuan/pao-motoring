<template>
    <footer class="footer">
        <img class="bg" src="../assets/img/footer.png" alt=""/>
        <div class="txt">
            <img class="logo" src="../assets/logo1.png" alt=""/>
            <ul>
                <li><router-link to="/">网站首页</router-link></li>
                <li><router-link to="/about">公司概况</router-link></li>
                <li><router-link to="/cooperation">商务合作</router-link></li>
                <li><router-link to="/hr">人才招聘</router-link></li>
                <li><router-link to="/contact">联系我们</router-link></li>
            </ul>
            <p>Copyright © 2019 世佰跑（武汉）科技有限公司 版权所有</p>
            <p>鄂ICP备&nbsp;19028267号</p>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped lang="scss">
    footer.footer{
        position: relative;
        font-size: 0;
        overflow: hidden;
        img.bg{
            width: 100%;
        }
        .txt{
            position: absolute;
            top:50%;left: 50%;
            transform: translate(-50%,-50%);
            text-align: center;
            img.logo{
                width: 160px;
                margin: 0 0 30px 0;
            }
            ul{
                @include flex();
                font-size: 15px;
                color: #fff;
                li{
                    padding: 0 20px;
                    a:hover{
                        color: #409EFF;
                    }
                }
            }
            p{
                font-size: 14px;
                color: #ccc;
                margin: 20px 0;
            }
        }
    }
</style>