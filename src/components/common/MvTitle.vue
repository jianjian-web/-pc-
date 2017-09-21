<template>
  <div class="MvTitle">
    <div class="lf">
      <span class="TitleIcon" :class="icon"></span>
      <span class="title">{{title}}</span>
    </div>
    <a :href="path" class="rt">
      <span>更多</span><span class="el-icon-arrow-right"></span>
    </a>
  </div>
</template>

<script>
  export default {
    name: 'MvTitle',
    data () {
      return {

      }
    },
    props:{
      icon:{
        type:String,
        required:true
      },
      title:{
        type:String,
        required:true
      },
      path:{
        type:String,
        required:true
      }
    }
  }
</script>


<style scoped lang="less">
  .MvTitle {
    height: 50px;
    line-height: 50px;
    border-bottom:1px solid #E4E4E7;
    .TitleIcon {
      font-size: 20px;
      color: #D15757;
      font-weight: bold;
    }
    .title {
      margin-left: 10px;
    }
    .rt{
      cursor: pointer;
      span{
        color:#999;
        font-size:12px;
      }
    }
  }
</style>
