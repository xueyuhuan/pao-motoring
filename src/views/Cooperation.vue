<template>
    <div class="cooperation">
        <img class="banner" src="../assets/img/cooperation/banner.png" alt=""/>
        <Title zh="供应商合作" en="Supplier Cooperation"></Title>
        <div class="content">
            <el-row :gutter="20">
                <el-col :span="8">
                    <el-card shadow="hover">
                        <header slot="header"><el-button type="text">汽车零部件</el-button></header>
                        <div class="icon"><i class="iconfont icon-auto"></i></div>
                        <p>资金实力雄厚，资质齐全，本身具有快速、稳定的供货能力，能提供多品种产品，注重品质，能提供
                            优质的售后服务。</p>
                    </el-card>
                </el-col>
                <el-col :span="8">
                    <el-card shadow="hover">
                        <header slot="header"><el-button type="text">家居用品</el-button></header>
                        <div class="icon"><i class="iconfont icon-home"></i></div>
                        <p>家具、床上用品、厨卫用具、室内配饰及日常生活需要的商品，了解市场需求，能提供备货。<br/><br/></p>
                    </el-card>
                </el-col>
                <el-col :span="8">
                    <el-card shadow="hover">
                        <header slot="header"><el-button type="text">建材家装</el-button></header>
                        <div class="icon"><i class="iconfont icon-Moneymanagement"></i></div>
                        <p>各种结构材料、装饰材料，灯具等，质量高，节能环保，能提供相关资质认证。<br/><br/></p>
                    </el-card>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="8">
                    <el-card shadow="hover">
                        <header slot="header"><el-button type="text">消费电子产品</el-button></header>
                        <div class="icon"><i class="iconfont icon-Electronics"></i></div>
                        <p>智能手机、音频产品，相机摄影器材，智能手环设备等，产品齐全，能提供多种类产品和配件，货源
                            稳定，售后服务到位，新品供货能力强，资质齐全。</p>
                    </el-card>
                </el-col>
                <el-col :span="8">
                    <el-card shadow="hover">
                        <header slot="header"><el-button type="text">电脑办公</el-button></header>
                        <div class="icon"><i class="iconfont icon-computer"></i></div>
                        <p>电脑配件，打印设备，其他办公用品，品质保证，提供优质的售后服务，实力雄厚供应商。<br/><br/></p>
                    </el-card>
                </el-col>
                <el-col :span="8">
                    <el-card shadow="hover">
                        <header slot="header"><el-button type="text">母婴用品</el-button></header>
                        <div class="icon"><i class="iconfont icon-infantmom"></i></div>
                        <p>安全健康，品质保证，获得母婴行业权威机构的实力认可。<br/><br/></p>
                    </el-card>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="8">
                    <el-card shadow="hover">
                        <header slot="header"><el-button type="text">美妆</el-button></header>
                        <div class="icon"><i class="iconfont icon-beauty"></i></div>
                        <p>男/女士护肤、彩妆、个人护理、美容工具等品类多样，符合市场需求。<br/><br/></p>
                    </el-card>
                </el-col>
                <el-col :span="8">
                    <el-card shadow="hover">
                        <header slot="header"><el-button type="text">服饰</el-button></header>
                        <div class="icon"><i class="iconfont icon-apparel"></i></div>
                        <p>女装、男装、童装等产品出口欧美市场，款式新颖多样，符合欧美审美风格，交期及时，能按需生产，
                            能提供有竞争力的价格。</p>
                    </el-card>
                </el-col>
                <el-col :span="8">
                    <el-card shadow="hover">
                        <header slot="header"><el-button type="text">鞋类</el-button></header>
                        <div class="icon"><i class="iconfont icon-shoes"></i></div>
                        <p>单鞋、休闲鞋、运动鞋、商务鞋、凉鞋等款式时尚、设计精美、紧跟国际时尚品味，交期及时，能按
                            需生产，能提供有竞争力的价格。</p>
                    </el-card>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    import Title from "../components/Title";
    export default {
        name: "Cooperation",
        components: {Title}
    }
</script>

<style lang="scss">
    .cooperation{
        img.banner{
            width: 100%;
        }
        .content{
            width: 1200px;
            margin: 50px auto 0;
            .el-row{
                margin: 0 0 40px 0;
                .el-button{
                    font-size: 18px;
                }
                .icon{
                    text-align: center;
                    i.iconfont{
                        font-size: 78px;
                        color: rgb(102, 177, 255);
                    }
                }
            }
        }
    }
</style>