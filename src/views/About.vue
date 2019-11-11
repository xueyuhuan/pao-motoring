<template>
  <div class="about">
    <img class="banner" src="../assets/img/about/banner.png" alt=""/>
    <section>
      <div class="txt">
        <h4>—— 企业简介 ——</h4>
        <p>世佰跑（武汉）科技有限公司是由国家商务部推荐，2019年底由湖北省政府引进回汉的汽车零部件行业全球跨境电商龙头企业。</p>
        <p>世佰跑以进出口一般贸易和跨境电商业务为核心，结合网络IT技术手段和自建全球化国际仓储的售后能力，为客户提供全供应链一站式服务。公司目前在ebay、amazon、Aliexpress、wish、shopee等众多知名跨境电商平台上均有多家直营店铺，主营汽车零部件、家居用品、建材家装、美妆、母婴等多元化产品品类，致力为全球客户提供最优质的产品及服务。</p>
      </div>
      <img src="../assets/img/about/1.png" alt=""/>
    </section>
    <section>
      <img src="../assets/img/about/2.png" alt=""/>
      <div class="txt">
        <h4>—— 海外仓储 ——</h4>
        <p>公司在美国奥克兰，堪萨斯，新泽西市拥有占地1万8000平米的自建仓库，有美国员工36人，俄罗斯莫斯科有员工30人和自建仓库4000平方米，在英国曼彻斯特和伯明翰有自建仓4400平方（1200平方立体仓库，3000平方普通仓库），员工28人。</p>
        <p>严谨、高效、安全的运营管理为批发和零售客户提供全供应链优质服务和售后保障。</p>
      </div>
    </section>
    <section>
      <div class="txt">
        <h4>—— 海外实践 ——</h4>
        <p>基于汽车零部件产业的海外本土供应商合作，目前已经进行了美国、俄罗斯本地团队的组建和运营，同时在逐步完成对海外本土汽车产
          业供应商的市场合作洽谈等相关综合服务工作。目前已经先期开展线下行业供应商TOP100的合作意向签订，已完成部分品牌的渠道建设、
          品牌运营、电商平台的独家运营合作。</p>
        <p>同时与众多知名国际电商平台签订全面战略合作协议，同时聚焦美、俄两大国成为海外本土的综合
          服务商，积极配合全球知名电商平台完成市场布局和线下推广推介工作。</p>
      </div>
      <img src="../assets/img/about/3.png" alt=""/>
    </section>
    <section>
      <img src="../assets/img/about/4.png" alt=""/>
      <div class="txt">
        <h4>—— 发展规划 ——</h4>
        <p>计划2020年完成全球汽车零部件供应商的合作运营不低于200家，销售额100亿人民币，同时开展家具、服装、建材等类目的线上线下渠道建设和市场布局。</p>
        <p>计划2020年组建不低于1500人的专职销售团队和孵化不低于100家跨境电商全供应链生态相关企业，包括电商平台ERP软件、第三方应用软件、国际贸易、跨境电商运营、海外本地工商服务、金融服务、国际物流服务、国际货运服务、创意设计、自媒体营运及自建站运营等诸多方面的项目落地工作。</p>
        <p>计划2020年针对湖北本土产业签订生态合作伙伴不低于5000家，产品行业品类不少于五大类。对湖北本地的人才孵化、企业孵化按照创新创业要求指导，提供全供应链的服务，降低双创成本。</p>
        <p>计划2020为湖北汽车零部件产业相关制造型本地工厂或贸易商提供统一的入口与出口管理，降低企业运营综合成本，采用多种合作采购形式拓展汽车产业相关不少于1000家制造企业的互联网+跨境电商的新业务模式转型，建立跨境电商销售渠道，为后续多品类行业产品开发和推广起到积极作用。</p>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: "About"
  }
</script>

<style scoped lang="scss">
  .about{
    img.banner{
      width: 100%;
    }
    section{
      @include flex(space-around);
      width: 70%;
      margin: 40px auto;
      img{
        border-radius: 50%;
      }
      .txt{
        margin-left: 20px;
        h4{
          font-size: 28px;
          font-weight: 500;
          color: #333;
          text-align: center;
          margin: 20px 0;
        }
        p{
          width: 600px;
          font-size: 16px;
          color: #666;
          text-indent: 2em;
          text-align: justify;
          margin: 10px 0;
        }
      }
    }
  }
</style>
