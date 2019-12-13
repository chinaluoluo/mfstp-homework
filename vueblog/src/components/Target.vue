<template>
<div class="main">
    <div class="targettitle">标签</div>
    <div class="targetmain">
    <router-link to="/">vue</router-link>
    <router-link to="/">js</router-link>
    <router-link to="/">html</router-link>
    <router-link to="/">css</router-link>
    </div>

</div>
</template>

<script>
export default {
  name: 'target',
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
.targettitle{
    font-size: 25px;
}
.targetmain{
  margin:15px 0 0 0;
    display: flex;
    flex-wrap:wrap;
 
}
a{
    border: 1px solid pink;
    padding: 3px 2px;
    margin : 0 5px;
}
</style>
