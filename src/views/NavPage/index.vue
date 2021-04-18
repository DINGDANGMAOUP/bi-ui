<template >
  <div class="nav-page">
<!--    外层容器-->
    <el-container >
<!--      顶栏容器-->
      <el-header height="200px">
        <span style="font-size: 50px">BI 导航</span>
      </el-header>
<!--      主要内容-->
      <el-main>
        <el-row :gutter="20">
          <el-col :span="6">
            <el-card class="box-card" shadow="hover" >
              <div slot="header" class="clearfix">
                <span>生成报表</span>
              </div>
              <div v-for="Reports in GenerateReports" :key="Reports">
                <el-button type="success"  plain >{{Reports.name}}</el-button>
              </div>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card class="box-card" shadow="hover">
              <div slot="header" class="clearfix">
                <span>驻外分析</span>
              </div>
              <div v-for="o in 4" :key="o" class="text item">
                {{'列表内容 ' + o }}
              </div>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card class="box-card" shadow="hover">
              <div slot="header" class="clearfix">
                <span>产销协调</span>
              </div>
              <div v-for="o in 4" :key="o" class="text item">
                {{'列表内容 ' + o }}
              </div>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card class="box-card" shadow="hover">
              <div slot="header" class="clearfix">
                <span>外部链接</span>
              </div>
              <div v-for="o in 4" :key="o" class="text item">
                {{'列表内容 ' + o }}
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-main>
<!--      底部内容-->
      <el-footer >
        <h2>tip</h2>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'NavPage',
  data () {
    return {
      GenerateReports: [{
        name: '原材料分析'
      }, {
        name: '包材库分析'
      }, {
        name: '半成品库分析'
      }, {
        name: 'WMS库报表'
      }]
    }
  },
  beforeRouteEnter (to, from, next) {
    // 添加背景色
    document.querySelector('body').setAttribute('style', 'background-color:#f9f9f9')
    next()
  },
  beforeRouteLeave (to, from, next) {
    // 去除背景色
    document.querySelector('body').setAttribute('style', '')
    next()
  }
}

</script>
<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg:#283443;
$light_gray:#fff;
$cursor: #fff;
//.nav-page{
//  min-height: 100%;
//  width: 100%;
//  background-color: $bg;
//  overflow: hidden;
//}
</style>
<style lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;
.nav-page{
  //min-height: 100%;
  //width: 100%;
  //background-color: $bg;
  //overflow: hidden;

  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
}
</style>
