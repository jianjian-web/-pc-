<template>
  <div class="header">
    <span class="el-icon-wangyi-long-arrow-right back" @click="handleBack"></span>
    <span>网易云音乐</span>
    <div class="editIcon">
      <span class="el-icon-wangyi-hengxian"></span>
      <span class="el-icon-wangyi-zuidahua-copy"></span>
      <span class="el-icon-wangyi-icon"></span>
    </div>
  </div>
</template>

<script>
  import { mapState } from "vuex"
  export default {
    name: 'header',
    data () {
      return {

      }
    },
    computed: {
      ...mapState([

      ])
    },
    methods:{
      handleBack () {
        this.$router.go(-1);
      }
    }
  }
</script>


<style scoped>
    .header{
      height: 40px;
      background:#BC2F2E;
      font-size:14px;
      color:#fff;
    }
    .back{
      height:100%;
      line-height: 40px;
      padding:0 1em;
      font-weight: bold;
    }
    .back:hover{
       background:#E81023;
       cursor: pointer;
    }
    .editIcon{
      float:right;
      line-height: 40px;
      height:40px;
    }
    .editIcon>span{
      float: left;
      height:40px;
      line-height:40px;
      padding:0px 10px;
      font-size:12px;
      cursor: pointer;
    }
    .editIcon>span:hover{
      background:#E81023;
    }
</style>
