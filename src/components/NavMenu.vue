<template>
  <div class="w-body">
    <div class="NavMenu" :class="{isclone:isToggle}">
      <div class="list-menu el-icon-wangyi-mulu2" @click="handleToggle"></div>
      <ul class="nav-list">
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
    </div>
    <!--========== 创建歌单dialog =========-->
    <el-dialog title="新建歌单" :visible="dialogVisible" size="tiny">
      <el-input type="textarea" :rows="2" placeholder="歌单标题" v-model="songSheetName"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" class="creatButton" @click="handleNewCreat">新建</el-button>
        <el-button class="reset">取消</el-button>
      </span>
    </el-dialog>

    <div class="main">
      2313123123 Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eaque a deserunt repellat quibusdam expedita sequi at. Earum rem nisi, perspiciatis porro aspernatur aperiam fuga nobis laudantium ipsa! Quis, quas.
    </div>
  </div>
</template>

<script>
  export default {
    name: 'nav',
    data () {
      return {
        isToggle: false,
        dialogVisible: true,
        songSheetName:''
      }
    },
    methods: {
      handleToggle () {
        this.isToggle = !this.isToggle;
      },
      handleCreateSongSheet () {
        this.dialogVisible=true;
      },
      handleNewCreat () {
        this.dialogVisible=!this.dialogVisible;
      }
    }
  }
</script>

<style scoped lang="less">
  .NavMenu {
    float: left;
    border: 1px solid red;
    width: 200px;
    height: 100%;
    overflow-y: scroll;
    background: #F3F3F5;
    .list-menu {
      height: 50px;
      line-height: 50px;
      padding-left: 10px;
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

  .main {
    border: 1px solid blue;
    overflow: hidden;
    height: 100%;
  }

  .w-body {
    height: calc(~"100% - 40px - 75px");
  }

  .isclone {
    width: 45px;
    .nav-list {
      li {
        span {
          display: none;
        }
      }
    }
  }

  .creatSongSheet {
    float: right;
    font-size: 20px;
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
