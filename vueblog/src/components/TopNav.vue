<template>
<div class="mainnav">
  <h1>骆全胜的博客</h1>
  <div>
    <router-link to="/">主页</router-link>
    <router-link to="/about">关于</router-link>
  </div>
</div>
</template>

<script>
export default {
  name: 'topnav',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mainnav{
    padding-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom:1px solid gray;
}
h1{
    margin:0 20px;
}
a{
    margin:10px 10px;
    justify-self: flex-end;
}
</style>
