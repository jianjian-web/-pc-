<template>
  <div class="w-body">
    <div class="NavMenu" :class="{isclose:isToggle}">
      <div class="list-menu el-icon-wangyi-mulu2" @click="handleToggle"></div>
      <ul class="nav-list" @click="handleRouter">
        <li>
          <i class="el-icon-wangyi-sousuo"></i>
          <span>搜索</span>
        </li>
        <li>
          <i class="el-icon-wangyi-yinyue"></i>
          <span>发现音乐</span>
        </li>
        <li>
          <i class="el-icon-wangyi-mv1"></i>
          <span>MV</span>
        </li>
        <li>
          <i class="el-icon-wangyi-pengyou"></i>
          <span>朋友</span>
        </li>
      </ul>
      <ul class="nav-list">
        <div class="title">我的音乐</div>
        <li>
          <i class="el-icon-wangyi-bendiyinle"></i>
          <span>本地音乐</span>
        </li>
        <li>
          <i class="el-icon-wangyi-download-copy"></i>
          <span>下载管理</span>
        </li>
        <li>
          <i class="el-icon-wangyi-clock"></i>
          <span>最近播放</span>
        </li>
        <li>
          <i class="el-icon-wangyi-yun"></i>
          <span>我的音乐云盘</span>
        </li>
        <li>
          <i class="el-icon-wangyi-diantai"></i>
          <span>我的电台</span>
        </li>
        <li>
          <i class="el-icon-wangyi-tianjiawenjian"></i>
          <span>我的收藏</span>
        </li>
      </ul>
      <ul class="nav-list">
        <div class="title">创建的歌单
          <i class="el-icon-wangyi-jia creatSongSheet" @click="handleCreateSongSheet"></i>
        </div>
        <li>
          <i class="el-icon-wangyi-bendiyinle"></i>
          <span>本地音乐</span>
        </li>
        <li>
          <i class="el-icon-wangyi-download-copy"></i>
          <span>下载管理</span>
        </li>
        <li>
          <i class="el-icon-wangyi-zuijinbofang"></i>
          <span>最近播放</span>
        </li>
        <li>
          <i class="el-icon-wangyi-yun"></i>
          <span>我的音乐云盘</span>
        </li>
        <li>
          <i class="el-icon-wangyi-diantai"></i>
          <span>我的电台</span>
        </li>
        <li>
          <i class="el-icon-wangyi-tianjiawenjian"></i>
          <span>我的收藏</span>
        </li>
      </ul>
      <div class="el-icon-wangyi-shouqi2 list-open" @click="handleToggle"></div>
    </div>
    <!--========== 创建歌单dialog =========-->
    <el-dialog title="新建歌单" :visible="dialogVisible" size="tiny" :before-close="handleClose" top="30%">
      <el-input type="textarea" :rows="2" placeholder="歌单标题" v-model="songSheetName"></el-input>
      <el-checkbox v-model="privacySongSheet" class="privacy">设置为隐私歌单</el-checkbox>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" class="creatButton" @click="handleNewCreat">新建</el-button>
        <el-button class="reset">取消</el-button>
      </span>
    </el-dialog>

    <!-- <div class="main">
          2313123123 Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dolorem eaque a deserunt repellat quibusdam expedita sequi at. Earum
           rem nisi, perspiciatis porro aspernatur aperiam fuga nobis laudantium
           ipsa! Quis, quas.
        </div> -->

  </div>
</template>

<script>
  export default {
    name: 'nav',
    data () {
      return {
        isToggle: false,
        dialogVisible: false,
        songSheetName: '',
        privacySongSheet: false
      }
    },
    methods: {
      handleToggle () {
        this.isToggle = !this.isToggle;
      },
      handleCreateSongSheet () {
        this.dialogVisible = true;
      },
      handleNewCreat () {
        this.dialogVisible = !this.dialogVisible;
      },
      handleClose () {
        this.dialogVisible = !this.dialogVisible;
      },
      handleRouter (e) {/*??????????????????????*/
        var title = e.target.textContent;
          // debugger
        if(title==="发现音乐"){
          this.$router.push({path:"/fined"})
          console.log(title)
        }
        // console.dir(title)
        // setTimeout(function () {
          // switch (title) {
          //   case "发现音乐":
          // console.log("tt"+title)
          //     break;
          // }
        // },0);

      }
    }
  }
</script>

<style scoped lang="less">
  .NavMenu {
    float: left; // border: 1px solid red;
    width: 200px;
    height: 100%;
    overflow: auto;
    background: #F3F3F5;
    .list-menu {
      height: 50px;
      line-height: 50px;
      padding-left: 10px;
    }
    .list-open {
      display: none;
    }
    .nav-list {
      li {
        padding-left: 10px;
        height: 45px;
        line-height: 45px;
        i {
          display: inline-block;
          margin-right: 10px;
          font-size: 16px;
        }
        span {
          font-size: 14px;
        }
        &:hover {
          background: #E8E8EB;
          cursor: pointer;
        }
      }
      .title {
        color: #999;
        font-size: 12px;
        padding: 20px 10px;
      } // margin-bottom:20px;
    }
  }

  .w-body {
    height: calc(~"100% - 40px - 75px");
    float: left;
  }

  .isclose {
    /*用于控制折叠效果*/
    width: 40px;
    .nav-list {
      li {
        span {
          display: none;
        }
      }
    }
    .nav-list:nth-child(3),
    .nav-list:nth-child(4) {
      display: none;
    }
    .list-open {
      display: block;
      padding: 15px 10px;
      color: #666;
      &:hover {
        background: #E8E8EB;
        cursor: pointer;
      }
    }
  }

  .creatSongSheet {
    float: right;
    font-size: 20px;
  }

  .privacy {
    margin-top: 20px;
    color: #999;
  }

  .dialog-footer {
    button {
      padding: 8px 25px;
      border-radius: 0;
    }
    .creatButton {
      background: #C85856;
      &:hover {
        background: #D85F5D;
      }
    }
    .reset {
      color: #C85856;
      border-color: #C85856;
      &:hover {
        border-color: #DE625F;
        color: #DE625F;
      }
    }
  }
</style>
