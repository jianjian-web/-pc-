<template>
  <div class="recommend">
    <el-carousel :interval="4000" type="card" height="180px" v-if="bannerData.length">
      <el-carousel-item v-for="(item,index) in bannerData" :key="index">
        <a :href="item.url?item.url:false">
          <img :src="item.pic">
        </a>
      </el-carousel-item>
    </el-carousel>
    <div class="centerLink">
      <div>
        <span class="linkIcon el-icon-wangyi-shouyinji"></span>
        <div class="linkRight">
          <p>私人FM</p>
          <p>享受你的音乐专属推荐</p>
        </div>
      </div>
       <div>
        <span class="linkIcon">21</span>
        <div class="linkRight">
          <p>每日歌曲推荐</p>
          <p>根据你的口味生成</p>
        </div>
      </div>
       <div>
        <span class="linkIcon el-icon-wangyi-xingxing"></span>
        <div class="linkRight">
          <p>排行榜</p>
          <p>最新音乐榜</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Recommend',
    data () {
      return {
        bannerData: []
      }
    },
    beforeCreate () {
      var vm = this;
      this.$http.get("/banner").then(response => {
        console.dir(response.data.banners)
        vm.bannerData = response.data.banners;
      }).catch(err => {
        console.dir(err)
        console.log("程序有错误")
      });
    }
  }
</script>


<style lang="less">
  .recommend {
    height: 100%;
    overflow: auto;
    .el-carousel {
      .el-carousel__indicators--outside {
        position: absolute;
        bottom: 0px;
        transform: translate(-50%);
        .el-carousel__button {
          background-color: #fff;
          opacity: 1;
        }
        .is-active {
          button {
            background-color: #BC2F2E;
          }
        }
      }
      .el-carousel__item {
        img {
          height: 180px;
        }
      }
    }
    .centerLink {
      // border: 1px solid red;
      height: 110px;
      &>div {
        width: 333px;
        float: left;
        height: 70px;
        margin-top: 25px;
        line-height: 70px;
        border-right: 1px solid #999;
        cursor: pointer;
        transition: all 0.4s ease;
      }
      &>div:hover{
        transform: scale(0.95,0.95)
      }
      &>div:last-child{
        border-right:none;
      }
      .linkIcon {
        display:inline-block;
        width: 60px;
        height: 60px;
        line-height: 60px;
        text-align: center;
        border-radius: 30px;
        border: 1px solid #EBBCBD;
        margin-left: 60px;
        font-size: 2em;
        color: #D15757;
      }
      .linkRight{
        float:right;
        line-height:10px;
        position: relative;
        left:-35px;
        p:nth-child(1){
          font-weight:bold;
        }
        p:nth-child(2){
          color:#999;
        }
      }
    }
  }
</style>
