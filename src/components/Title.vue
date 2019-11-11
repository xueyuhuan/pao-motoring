<template>
    <div class="title">
        <h4>{{zh}}</h4>
        <p>{{en}}</p>
        <img src="../assets/img/title-arrow.png" alt=""/>
    </div>
</template>

<script>
    export default {
        name: "Title",
        props:{
            zh:String,
            en:String
        }
    }
</script>

<style scoped lang="scss">
    .title{
        text-align: center;
        h4{
            font-size: 36px;
            font-weight: 500;
            color: #333;
            margin: 50px 0 0 0;
        }
        p{
            font-size: 18px;
            color: #666;
            margin: 0 0 10px 0;
        }
    }
</style>