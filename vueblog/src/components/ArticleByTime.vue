<template>
<div class="main">
    <div class="articletitle">文章归档</div>
    <router-link to="/">2019年12月 (8)</router-link>
    <router-link to="/">2019年12月 (8)</router-link>
    <router-link to="/">2019年12月 (8)</router-link>
    <router-link to="/">2019年12月 (8)</router-link>
</div>
</template>

<script>
export default {
  name: 'articlebytime',
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
  margin:30px 0;
  display: block;
  text-align: left
}
.articletitle{
    font-size: 25px;
    margin: 15px 0;
}
a{
    margin: 5px 0;
    display: block;
}
</style>
