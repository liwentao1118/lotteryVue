<template>
  <div class="row" style="border: gainsboro solid 1px; padding: 10px;">
    <div class="col-xs-11">
      <div class="row" style="margin-bottom: 10px;">
        <span style="font-size: 1.2em;margin-right: 20px;">第{{history.code}}期</span> <span>{{history.date}}</span>
      </div>
      <div class="row">
        <div class="ball-item ball-red" v-for="i in history.red.split(',')">{{i}}</div>

        <div class="ball-item ball-blue">{{history.blue}}</div>

      </div>
    </div>
    <div class="col-xs-1" style="padding-left: 13px; padding-top: 30px;">
      <span class="glyphicon glyphicon-chevron-right" ></span>
    </div>
  </div>

</template>

<script>
    export default {
        name: "history-item",
      props:['history']
    }
</script>

<style scoped>

</style>
