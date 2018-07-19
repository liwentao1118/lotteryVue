<template>
  <div>
    <div class="col-xs-ball" v-for="ball in balls" @click="handleBlueClick(ball)">
      <div class="ball-item ball-blue" :class="{'ball-blue-selected':ball.selected}">{{ball.number}}</div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "blueball-picker",
      props:['randomBuleBall'],
      data(){
        return {
          balls:[],
          selectedBall:null
        }
      },
      watch:{
        randomBuleBall(newVal,oldVal){
            this.balls.forEach(item=>{
              console.log(newVal)
              if (item.number===newVal){
                item.selected=true
                this.selectedBall=item
              } else {
                item.selected=false
              }
            })
            this.$emit('blueball-change',this.selectedBall.number)
          }
      },
      methods:{
        handleBlueClick(ball){
         ball.selected = !ball.selected
          if(this.selectedBall){
            this.selectedBall.selected = false;

          }
          if (ball.selected){
           this.selectedBall=ball
            this.$emit('blueball-change',ball.number)
          }else {
           this.selectedBall=null
            this.$emit('blueball-change',null)
          }
        }
      },
      mounted(){
        for (let i = 1; i <=16 ; i++) {
          if (i<10)
            i='0'+i
          this.balls.push({number:i.toString(),selected:false})
        }
      }
    }
</script>

<style scoped>

</style>
