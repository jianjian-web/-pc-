<template>
  <div class="layout">
    <w-header></w-header>
    <w-nav></w-nav>
    <w-main></w-main>
  </div>
</template>

<script>
  import { mapState } from "vuex"
  export default {
    name: 'layout',
    data () {
      return {

      }
    },
    computed: {
      ...mapState([

      ])
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .layout {
    height: 100%;
  }
</style>
