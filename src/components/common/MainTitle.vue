<template>
  <div class="mainTitle">
    {{mainTitle}}
  </div>
</template>

<script>
  import { mapState } from "vuex"
  export default {
    name: 'title',
    data () {
      return {

      }
    },
    computed: {
      ...mapState([
        'mainTitle'
      ])
    }
  }
</script>


<style scoped>
  .mainTitle{
    color:#666;
    font-size:13px;
  }
</style>
