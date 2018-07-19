<template>
  <div>
    <title-bar :ftitle="title" :needback="needback"></title-bar>
   <carousel></carousel>
  <lottery-info></lottery-info>
  <!--机选按钮-->
  <div class="row"style="margin-top: 6px;margin-bottom: 8px;">
    <div class="col-xs-4">
      <input type="button" name=""  value="+ 手动选号" class="btn btn-default" @click="handleback"/>
    </div>
    <div class="col-xs-4">
      <input type="button" name=""  value="+ 机选一注" class="btn btn-default" @click="handleRandom"/>

    </div>
    <div class="col-xs-4">
      <input type="button" name="" value="+ 清空列表" class="btn btn-default" @click="handleClear"/>

    </div>
  </div>
    <cart-item v-for="item in getCarts" :key="item.redball+'-'+item.blue"  :item="item"></cart-item>
    <div class="menu">
      <div class="col-xs-12 menu-item" style="height: 50px;line-height: 50px;">
        <p>立即付款{{totalMoney}}元</p>
      </div>
    </div>
  </div>
</template>

<script>
  import TitleBar from '@/pages/common/TitleBar'
    import Carousel from "../common/Carousel";
    import LotteryInfo from "./components/LotteryInfo";
  import CartItem from "./components/CartItem";
  import {mapGetters,mapActions} from 'vuex'
  import BallUtils from '@/utils/BallUtils'
    export default {
        name: "CartPage",
      components: {CartItem, LotteryInfo, Carousel,TitleBar},
      data(){
        return {
          title:'购物车',
          needback:true
        }
      },
      computed:{
        ...mapGetters(['getCarts','totalMoney'])//...mapGetters(['getCarts','totalMoney'])
      },methods:{
        ...mapActions(['clearCart','addToCart']),
        handleClear(){
          this.clearCart()
        },
        handleback(){
          this.$router.go(-1)
        },
        handleRandom(){
          let red = BallUtils.randomRed();
          let blue = BallUtils.randomBlue()
          let data = {redballs:red,blueball:blue,count:1}
          this.addToCart(data)
        }
      }
    }
</script>

<style scoped>

</style>
