<template>
<!-- 主体里面的切换tag组件 -->
  <div class="tagToggle">
    <router-link to="/findMusic/recommend">个性推荐</router-link>
    <router-link to="/findMusic/songSheet">歌单</router-link>
  </div>
</template>

<script>
  export default {
    name: 'tagToggle',
    data () {
      return {

      }
    },
    computed: {

    }
  }
</script>


<style scoped lang="less">
.tagToggle{
  margin-top:20px;
  padding-bottom:6px;
  border-bottom:1px solid #E4E4E7;
  a{
    padding-bottom:5px;
    margin-right:20px;
  }
}
.router-link-active{
  color:#C62E2E;
  border-bottom:2px solid #C62E2E;
}
</style>
