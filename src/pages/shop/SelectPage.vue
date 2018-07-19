<template>
  <div>
<title-bar :ftitle="title" :needback="needback"></title-bar>
  <lottery-info></lottery-info>
  <div style="color:darkgray">请选择6个红球,1个蓝球</div>
  <redball-picker @redball-change="handleRedBallChange" :randomRedBalls="randomRed"></redball-picker>
<div class="clearfix"></div>
  <blueball-picker @blueball-change="handleBlueBallChange" :randomBuleBall="randomBlue"></blueball-picker>
  <div style="margin-top: 10px;float: right;margin-right: 10px;">
    <input type="button" value="添加" @click="handleAdd" class="btn btn-default" />
  </div>
  <div class="clearfix">

  </div>
  <div class="" style="margin-top: 10px;">


    <div class="" style="float: right;margin-right: 10px;">
      <input type="button" class="btn btn-default" value="机选幸运号" @click="handleRandomAll" />
    </div>
    <div class="" style="float: right; width: 20%;">
      <select v-model="num" class="form-control" >
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </div>
  </div>
  <div class="row  menu">
    <div class="col-xs-6 menu-item" @click="goToCart">
      <span class="glyphicon glyphicon-shopping-cart"></span>
      <span class="badge">{{cartSize}}</span>
      <p>购物车</p>
    </div>
    <div class="col-xs-6 menu-item">
      <span class="glyphicon glyphicon-save"></span>
      <p>立即投注</p>
    </div>
  </div>
  </div>
</template>

<script>
    import LotteryInfo from "./components/LotteryInfo";
    import RedballPicker from "./components/RedballPicker";
    import BlueballPicker from "./components/BlueballPicker";
    import TitleBar from '@/pages/common/TitleBar'
    import BallUtils from '@/utils/BallUtils'
    import {mapActions,mapGetters} from 'vuex'
    export default {
        name: "SelectPage",
      components: {BlueballPicker, RedballPicker, LotteryInfo,TitleBar},
      data(){
          return {
            title:'双色球',
            needback:true,
            redballs:[],
            blueball:null,
            num:1,
            randomRed:null,
            randomBlue:null
          }
      },
      methods:{
        ...mapActions(['addToCart']),
        handleRedBallChange(redballs){
          this.redballs = redballs
        },
        handleBlueBallChange(blueball){
          this.blueball = blueball
          console.log(this.blueball)
        },
        handleAdd(){
          let item = {redballs:this.redballs,blueball:this.blueball,count:1}
          this.addToCart(item)
        },
        goToCart(){
          this.$router.push('/cart')
        },
        handleRandomAll(){
          for (let i = 0; i < this.num; i++) {
            this.randomRed= BallUtils.randomRed()
            this.randomBlue = BallUtils.randomBlue()
            let data = {redballs:this.randomRed,blueball:this.randomBlue,count:1}
            console.log(this.randomBlue,this.randomRed)
            this.addToCart(data)
          }
        }

      },
      computed:{
        ...mapGetters(['cartSize'])
      }
    }
</script>

<style scoped>
  .badge{
    position: absolute;
    top:-10px;
    color:white;
    background-color: red;
  }

</style>
