<template>
<div class="main">
    <div class="articletitle">近期文章</div>
    <router-link to="/">轻松管理你的node版本</router-link>
    <router-link to="/">轻松管理你的node版本</router-link>
    <router-link to="/">轻松管理你的node版本</router-link>
</div>
</template>

<script>
export default {
  name: 'recentarticle',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{
  text-align: left;
  margin:0;
  display: block;
}
.articletitle{
  margin-bottom: 15px;
    font-size: 25px;
    
}
a{
  margin: 5px 0;
  padding: 0;
  display: block;
}
</style>
