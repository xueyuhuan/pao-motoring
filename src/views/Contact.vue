<template>
    <div class="contact">
        <img class="banner" src="../assets/img/contact/banner.png" alt=""/>
        <Title zh="联系我们" en="Contact Us"></Title>
        <div class="content">
            <ul>
                <li>
                    <el-button type="primary" icon="iconfont icon-phone1" circle plain></el-button>
                    <div class="txt">
                        <h4>电话</h4>
                        <span>15571245550</span>
                    </div>
                </li>
                <li>
                    <el-button type="primary" icon="iconfont icon-email-fill" circle plain></el-button>
                    <div class="txt">
                        <h4>邮箱</h4>
                        <span>kealWang@400paomotoring</span>
                    </div>
                </li>
                <li>
                    <el-button type="primary" icon="iconfont icon-company-fill" circle plain></el-button>
                    <div class="txt">
                        <h4>详细地址</h4>
                        <span>洪山区高新二路光谷云计算高新企业孵化中心2号楼19楼</span>
                    </div>
                </li>
            </ul>
            <baidu-map class="map" :center="{lng:114.428778,lat:30.483629}" :zoom="15">
                <bm-marker :position="{lng:114.428778,lat:30.483629}" animation="BMAP_ANIMATION_BOUNCE">
                    <bm-label content="世佰跑（武汉）科技有限公司" :labelStyle="{color: 'red', fontSize : '14px'}" :offset="{width: -35, height: 30}"/>
                </bm-marker>
            </baidu-map>
            <p>您可以在此给我们留言</p>
            <el-form label-width="60px">
                <el-form-item label="姓名">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="电话">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="Email">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="留言">
                    <el-input type="textarea" :rows="3"></el-input>
                </el-form-item>
                <el-form-item style="text-align: center">
                    <el-button type="primary" @click="submit">提交</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    import Title from "../components/Title";
    export default {
        name: "Contact",
        components: {Title},
        methods:{
            submit(){
                this.$message.success('已提交')
            }
        }
    }
</script>

<style lang="scss">
    .contact{
        img.banner{
            width: 100%;
        }
        .content{
            width: 1200px;
            margin: 0 auto;
            ul{
                margin-left: 240px;
                li{
                    @include flex();
                    margin: 30px 0;
                    i{
                        font-size: 20px;
                    }
                    .txt{
                        margin-left: 40px;
                        h4{
                            font-size: 18px;
                            margin: 0 0 10px 0;
                        }
                        span{
                            font-size: 16px;
                        }
                    }
                }
            }
            .map {
                width: 100%;
                height: 400px;
                padding: 8px;
                border: 10px solid #f3f3f3;
                margin: 40px 0;
            }
            p{
                font-size: 18px;
                margin-left: 470px;
            }
            .el-form{
                margin: 0 360px 0 240px;
            }
        }
    }
</style>