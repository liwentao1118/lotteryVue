<template>
  <div>
    <title-bar :ftitle="title"></title-bar>
    <carousel></carousel>
    <history-list :data="historyList"></history-list>
    <menu-bar></menu-bar>
  </div>
</template>

<script>
  import Carousel from "@/pages/common/Carousel";
  import TitleBar from '@/pages/common/TitleBar'
  import MenuBar from '@/pages/common/menu-bar'
  import axios from 'axios'
  import HistoryList from "@/pages/home/components/HistoryList";

  export default {
    name: "home-page",
    components: {
      HistoryList,
      Carousel,
      TitleBar,
      MenuBar
    },
    data() {
      return {
        title: '博彩首页',
        historyList: []
      }
    },
    mounted() {
      axios.get('/api/index').then(resp => {
        this.historyList = resp.data.data
        console.log(this.historyList)

      })

    }
  }
</script>

<style scoped>

</style>
