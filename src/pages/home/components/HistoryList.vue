<template>
<div>
  <history-item v-for="item in data" :key="item.code" :history="item" @click.native="goToDetail('/detail?code='+item.code)"></history-item>
</div>
</template>

<script>
    import HistoryItem from "@/pages/home/components/HistoryItem";
    export default {
        name: "history-list",
      props:['data'],
      components:{
        HistoryItem
      },
      methods:{
          goToDetail(path){
            this.$router.push(path)
          }
      }
    }
</script>

<style scoped>

</style>
