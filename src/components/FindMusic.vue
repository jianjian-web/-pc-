<template>
  <div class="findMusic">
    <w-title></w-title>
    <w-tag></w-tag>
    <div class="findMusicBody">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
  import { mapState } from "vuex"
  export default {
    name: 'findMusic',
    data () {
      return {

      }
    },
    computed: {
      ...mapState([

      ])
    },
    methods: {

    },
    beforeCreate () {
      this.$router.push({ path: '/findMusic/recommend' })
    }
  }
</script>


<style scoped lang="less">
  .findMusic {
    height: 100%;
    .findMusicBody {
      width: 1000px;
      height:100%;
      margin: 20px auto;
    }
  }
</style>
