<template>
  <div class="home">
    <section class="banner">
      <el-carousel height="580px">
        <el-carousel-item>
          <img src="../assets/img/banner1.png" alt=""/>
        </el-carousel-item>
        <el-carousel-item>
          <img src="../assets/img/banner2.png" alt=""/>
        </el-carousel-item>
        <el-carousel-item>
          <img src="../assets/img/banner3.png" alt=""/>
        </el-carousel-item>
      </el-carousel>
    </section>
    <section class="service">
      <Title zh="我们的服务" en="Our Service"></Title>
      <ul>
        <li>
          <div class="circle"><i class="iconfont icon-jckmy"></i></div>
          <h4>进出口贸易</h4>
          <span>Import And Export Trade</span>
          <p>多年跨境贸易，积累丰富的<br/>经验</p>
        </li>
        <li>
          <div class="circle"><i class="iconfont icon-kjdsyy"></i></div>
          <h4>跨境电商运营</h4>
          <span>Cross-border E-commerce</span>
          <p>自建全球化国际仓储，<br/>为客户提供全供应链一站式服务</p>
        </li>
        <li>
          <div class="circle"><i class="iconfont icon-hwbdhfw"></i></div>
          <h4>海外本地化服务</h4>
          <span>Overseas localization service</span>
          <p>海外本土供应商合作，<br/>组建本地运营团队</p>
        </li>
        <li>
          <div class="circle"><i class="iconfont icon-qqfx"></i></div>
          <h4>全球分销运营</h4>
          <span>Distribution Platform</span>
          <p>高效的货品管理，价格管理，<br/>库存共享，快速建立全球分销渠道</p>
        </li>
      </ul>
    </section>
    <section class="about">
      <Title zh="关于我们" en="About Us"></Title>
      <div class="content">
        <img src="../assets/img/about.jpg" alt=""/>
        <div class="txt">
          <p>世佰跑（武汉）科技有限公司是由国家商务部推荐，2019年底由湖北省政府引进回汉的汽车零部件行业全球跨境电商龙头企业。</p>
          <p>世佰跑以进出口一般贸易和跨境电商业务为核心，结合网络IT技术手段和自建全球化国际仓储的售后能力，为客户提供全供应链一站式服务。公司目前在ebay、amazon、Aliexpress、wish、shopee等众多知名跨境电商平台上均有多家直营店铺，主营汽车零部件、家居用品、建材家装、美妆、母婴等多元化产品品类，致力为全球客户提供最优质的产品及服务。</p>
          <el-link type="primary"><router-link to="/about">MORE>></router-link></el-link>
        </div>
      </div>
    </section>
    <section class="business">
      <Title zh="商务合作" en="Business Cooperation"></Title>
      <div class="content">
        <img src="../assets/img/business.png" alt=""/>
        <p class="txt">世佰跑公司目前在ebay、amazon、Aliexpress、wish、shopee等众多知名跨境电商平台上均有多家直营店铺，主营汽车零部件、家居用品、建材家装、美妆、母婴等多元化产
          品品类，致力为全球客户提供最优质的产品及服务。招募各品类优质产品供应商，实现合作共赢，共同发展。
        </p>
      </div>
    </section>
    <section class="map">
      <Title zh="业务覆盖" en="Business Coverage"></Title>
      <img src="../assets/img/map.png" alt="map"/>
    </section>
    <section class="info">
      <Title zh="动态资讯" en="Dynamic Information"></Title>
      <router-link to="/details">
        <el-card shadow="hover" class="content">
          <img src="../assets/img/info.png" alt=""/>
          <div class="txt">
            <h5>海外汽配售后市场新变化：核心部件产品需求旺盛，巨大的蓝海市场等你来挖掘</h5>
            <p>一个巨大的蓝海——高达1.3万亿全球汽配售后市场。</p>
            <p>每1秒钟成交1个摩配</p>
            <p>每2秒钟成交1个车灯</p>
            <p>每6秒钟成交1套车轮和轮胎</p>
            <p>……</p>
          </div>
        </el-card>
      </router-link>
    </section>
  </div>
</template>

<script>
import Title from "../components/Title";
export default {
  name: "home",
  components: {Title},
};
</script>

<style lang="scss">
  .home{
    .service{
      ul{
        @include flex(space-around);
        padding: 40px 0 70px;
        li{
          text-align: center;
          .circle{
            background: #459eec;
            width: 120px;
            height: 120px;
            border-radius: 50%;
            margin: 0 auto;
            i{
              color: #fff;
              font-size: 120px;
            }
          }
          h4{
            font-size: 24px;
            font-weight: 500;
            color: #333333;
            margin: 10px 0 20px;
          }
          span{
            font-size: 16px;
            color: #999999;
          }
          p{
            font-size: 16px;
            color: #666666;
            margin: 10px 0;
          }
        }
      }
    }
    .about{
      background: #f2f2f2;
      overflow: hidden;
      .content{
        @include flex(center);
        padding: 30px 0 20px;
        img{
          width: 700px;
        }
        .txt{
          flex: 0 0 600px;
          background: #fff;
          text-align: center;
          padding: 40px;
          margin-left: -80px;
          p{
            font-size: 18px;
            line-height: 1.5;
            text-align: left;
            text-indent: 2em;
            margin: 0 0 10px 0;
          }
        }
      }
    }
    .business{
      .content{
        position: relative;
        text-align: center;
        img{
          width: 100%;
          margin: 20px 0 0 0;
        }
        .txt{
          position: absolute;
          top:50%;left: 50%;
          transform: translate(-50%,-50%);
          color: #fff;
          font-size: 16px;
        }
      }
    }
    .map{
      text-align: center;
      img{
        margin: 20px 0 0 0;
      }
    }
    .info{
      padding: 0 15%;
      .content{
        margin: 30px 0 60px;
        .el-card__body{
          @include flex();
          .txt{
            margin-left: 20px;
            h5{
              font-size: 24px;
              color: #333;
            }
            p{
              font-size: 16px;
              color: #666;
            }
          }
        }
      }
    }
  }
</style>
