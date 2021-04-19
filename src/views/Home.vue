<template>
  <div class="page">
    <h2>Home Page</h2>
    <li class="fa fa-home fa-lg"></li>
    <el-button type="primary" @click="testAxios()">test</el-button>
    <el-button type="primary" @click="getUser()">user</el-button>
    <el-button type="primary" @click="getMenu()">menu</el-button>
    <h3>{{$t('common.doc')}}</h3>
    <el-button type="success" @click="changeLanguage('zh_cn')">简体中文</el-button>
    <el-button type="success" @click="changeLanguage('en_us')">English</el-button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Home',
  methods: {
    testAxios () {
      axios.get('http://localhost:8081').then(res => { alert(res.data) })
    },
    getUser () {
      this.$api.menu.findMenuTree().then(res => { alert(JSON.stringify(res.data)) })
    },
    getMenu () {
      this.$api.user.findPage().then(res => { alert(JSON.stringify(res.data)) })
    },
    changeLanguage (lang) {
      // eslint-disable-next-line no-unused-expressions
      lang === '' ? 'zh_cn' : lang
      this.$i18n.locale = lang
      this.langVisible = false
    }
  }
}
</script>

<style scoped>

</style>
