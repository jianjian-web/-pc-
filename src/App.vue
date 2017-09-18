<template>
  <div id="app">
    <router-view></router-view>
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
    background-color: #faa;
}
/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track
{
    -webkit-box-shadow: inset 0 0 6px rgba(86,86,86,0.3);
    border-radius: 10px;
     background-color: #eee; /*轨道颜色 */
}
/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb
{
    border-radius: 6px;
    -webkit-box-shadow: inset 0 0 6px rgba(139,139,139,0.3);
    background-color: #C8C9CC;
}
</style>
