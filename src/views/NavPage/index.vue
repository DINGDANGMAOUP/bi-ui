<template>
  <div class="nav-page">
    <!--    外层容器-->
    <el-container>
      <!--      顶栏容器-->
      <el-header >
        <span style="font-size: 50px">BI 导航页</span>
      </el-header>
      <!--      主要区域容器-->
      <el-main>
        <el-row :gutter="20">
          <el-col :span="5" :offset="1">
            <el-card class="box-card" shadow="hover">
              <div slot="header" class="clearfix">
                <span>生产报表</span>
              </div>
              <div>
              <span v-for="(Reports,i) in list.productionReport" v-if="i%2===0" :key="Reports">
                <span>
                <el-button type="text" @click="pushUrl(Reports.url)">{{ Reports.name }}</el-button>
                </span>
                <span>
                <el-button type="text" v-if="i+1<list.productionReport.length" @click="pushUrl(Reports.url)">
                  {{ list.productionReport[i + 1].name }}
                </el-button>
                  </span>
              </span>
              </div>
            </el-card>
          </el-col>
          <el-col :span="5" :offset="1">
            <el-card class="box-card" shadow="hover">
              <div slot="header" class="clearfix">
                <span>驻外分析</span>
              </div>
              <div>
              <span v-for="(Reports,i) in list.analysisAbroad" v-if="i%2===0" :key="Reports">
                <span>
                <el-button type="text" @click="pushUrl(Reports.url)">{{ Reports.name }}</el-button>
                </span>
                <span>
                <el-button type="text" v-if="i+1<list.analysisAbroad.length" @click="pushUrl(Reports.url)">
                  {{ list.analysisAbroad[i + 1].name }}
                </el-button>
                  </span>
              </span>
              </div>
            </el-card>
          </el-col>
          <el-col :span="5" :offset="1">
            <el-card class="box-card" shadow="hover">
              <div slot="header" class="clearfix">
                <span>产销协调</span>
              </div>
              <div>
              <span v-for="(Reports,i) in list.productionAndSalesCoordination" v-if="i%2===0" :key="Reports">
                <span>
                <el-button type="text" @click="pushUrl(Reports.url)">{{ Reports.name }}</el-button>
                </span>
                <span>
                <el-button type="text" v-if="i+1<list.productionAndSalesCoordination.length"
                           @click="pushUrl(Reports.url)">
                  {{ list.productionAndSalesCoordination[i + 1].name }}
                </el-button>
                  </span>
              </span>
              </div>
            </el-card>
          </el-col>
          <el-col :span="5" :offset="1">
            <el-card class="box-card" shadow="hover">
              <div slot="header" class="clearfix">
                <span>外部链接</span>
              </div>
              <div>
              <span v-for="(Reports,i) in list.externalLink" v-if="i%2===0" :key="Reports">
                <span>
                <el-button type="text" @click="JumpOutsideTheChain(Reports.url)">{{ Reports.name }}</el-button>
                </span>
                <span>
                <el-button type="text" v-if="i+1<list.externalLink.length" @click="JumpOutsideTheChain(Reports.url)">
                  {{ list.externalLink[i + 1].name }}
                </el-button>
                  </span>
              </span>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-main>
      <!--      底层容器-->
      <el-footer>
        <span style="font-size: 50px">tip</span>
      </el-footer>
    </el-container>
  </div>

</template>

<script>
export default {
  name: 'NavPage',
  data () {
    return {
      list: {
        productionReport: undefined,
        analysisAbroad: undefined,
        productionAndSalesCoordination: undefined,
        externalLink: undefined
      }
    }
  },
  created () {
    this.getGenerateReports()
  },
  methods: {
    getGenerateReports () {
      this.$api.report.getReports().then((res) => {
        this.list.productionReport = res.data.productionReport
        this.list.analysisAbroad = res.data.analysisAbroad
        this.list.productionAndSalesCoordination = res.data.productionAndSalesCoordination
        this.list.externalLink = res.data.externalLink
      }).catch(res => {
        this.$message({message: res.message, type: 'error'})
      })
    },
    pushUrl (url) {
      this.$router.push(url)
    },
    JumpOutsideTheChain (url) {
      window.location.href = url
      window.open(url, '_blank')
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
.nav-page{

}
$bg: #283443;
$light_gray: #fff;
$cursor: #fff;
</style>
<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
.nav-page {
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
    width: 250px;
  }
}
</style>
