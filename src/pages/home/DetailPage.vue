<template>
  <div>
  <title-bar ftitle="博彩详情" :needback="true"></title-bar>
  <carousel></carousel>
    <div style="margin-top: 5px;">

      <div class="">
        <div style="float: left;">
          第{{history.code}}期
        </div>
      </div>
      <div style="float: right;">
        {{history.date}}
      </div>
    </div>
    <!--清除浮动-->
    <div class="clearfix">

    </div>
    <div class="row text-center">
      <div class="ball-item ball-red" v-for="i in history.red.split(',')">{{i}}</div>

      <div class="ball-item ball-blue">{{history.blue}}</div>

    </div>



  <!--销量金额-->
  <div style="margin-top: 7px;">
    <table class="table table-bordered text-center">
      <thead>
      <tr>
        <td>本期销量</td>
        <td>奖池金额</td>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>{{history.sales}}</td>
        <td>{{history.poolmoney}}</td>
      </tr>
      </tbody>
    </table>
  </div>

  <!--奖金等级设置-->
  <div class="">
    <table class="table table-bordered text-center">
<thead>
      <tr>
        <td>奖项</td>
        <td>中奖注数</td>
        <td>中奖金额</td>
      </tr>
</thead>
      <tbody>
      <tr v-for="prize in history.prizegrades">
        <td>{{prize.type}}</td>
        <td>{{prize.typenum}}</td>
        <td>{{prize.typemoney}}</td>
      </tr>
      </tbody>

    </table>
  </div>





  <menu-bar></menu-bar>
  </div>



</template>

<script>
  import Carousel from "@/pages/common/Carousel";
  import TitleBar from '@/pages/common/TitleBar'
    import MenuBar from '@/pages/common/menu-bar'
    import axios from 'axios'
    export default {
        name: "detail-page",
      components:{
        Carousel,
        TitleBar,
        MenuBar

      },data(){
       return {
         history:{},
         code:this.$route.query.code
       }
    },
      mounted(){
          axios.get('/api/detail?code='+this.code).then(resp=>{
                this.history = resp.data.data
          })
      }
    }
</script>

<style scoped>

</style>
