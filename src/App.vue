<template>
  <div id="app">
    <w-layout></w-layout>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body{
  margin:0;
}
ul,li{
  list-style: none;
  margin:0;
  padding:0;
}
html,body{
  height:100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  height:100%;
}
*{
  box-sizing:border-box;
}
::-webkit-scrollbar
 {/*//轨道两端 */
    width: 8px;
    height: 16px;
    /* background-color: #faa; */
}
/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track
{
    /* -webkit-box-shadow: inset 0 0 6px rgba(86,86,86,0.3); */
    /* border-radius: 10px; */
    background-color: transparent; /*轨道颜色 */
}
/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb
{
    border-radius: 6px;
    -webkit-box-shadow: inset 0 0 6px rgba(139,139,139,0.3);
    background-color: #C8C9CC;
}

/* 全局样式 */

.el-dialog__title{   /*设置dialog的title粗细*/
    font-weight: 400;
  }
.v-modal{ /*设置dialog遮罩层为白色*/
  background:#fff;
}
.el-dialog__header{ /*给dialog的title设置一个下划线*/
  border-bottom:1px solid #E8E8EA;
  padding-bottom:20px;
}




</style>
