<template>
  <div class="main">
    <router-view></router-view>
  </div>
</template>

<script>
  import { mapState } from "vuex"
  export default {
    name: 'main',
    data () {
      return {

      }
    },
    computed: {
      ...mapState([

      ])
    },
    methods:{

    }
  }
</script>


<style scoped lang="less">
.main {
    // border: 1px solid blue;
    overflow: hidden;
    height: calc(~"100% - 40px - 75px");
    padding:15px;
  }
</style>
