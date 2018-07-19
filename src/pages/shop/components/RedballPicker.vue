<template>
  <div>
    <div>
      <div class="col-xs-ball  ball-div" v-for="ball in balls" @click="handleRedClick(ball)">
        <div class="ball-item ball-red" :class="{'ball-red-selected':ball.selected}">
          {{ball.number}}
        </div>
      </div>
    </div>

  </div>

</template>

<script>
    export default {
        name: "redball-picker",
      data(){
        return {
          balls:[],
          selectedBall:[]
        }
      },
      props:['randomRedBalls'],
      watch:{
        randomRedBalls(newVal,oldVal){
          this.selectedBall = []
          this.selectedBall = newVal
          this.balls.forEach(item=>{
            let index = this.selectedBall.indexOf(item.number)
            item.selected = index!=-1
          })
          this.$emit('redball-change',this.selectedBall)
        }
      },

      methods:{
          handleRedClick(ball){
              if (ball.selected){
                ball.selected=false
                let index = this.selectedBall.indexOf(ball.number);
                this.selectedBall.splice(index,1)
              }else {
                if (this.selectedBall.length<6){
                  ball.selected=true
                  this.selectedBall.push(ball.number)
                } else {
                  alert('最多选择6个红球')
                }
              }
              this.$emit('redball-change',this.selectedBall)
          }
      },
      mounted(){
        for (let i = 1; i <=33 ; i++) {
          if (i <10){
            i = "0"+i
          }
          this.balls.push({number:i.toString(),selected:false})
        }
      }
    }
</script>

<style scoped>
  .ball-div{
    float: left;
  }

</style>
