<template>
  <div id="app">
    <top-nav></top-nav>
    <div class="main">
     <div class="left" >
    <router-view/>
        </div>
    <div class="right">
      <Recent-article></Recent-article>
      <article-by-time ></article-by-time>
      <target></target>
    </div>
</div>
  </div>
</template>

<script>
import TopNav from './components/TopNav'
import  RecentArticle from './components/RecentArticle'
import  ArticleByTime from './components/ArticleByTime'
import  Target from './components/Target'
import  ArticleShow from './components/ArticleShow'
export default {
  name: 'App',
   components:{TopNav,RecentArticle,ArticleByTime,Target,ArticleShow}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;


}
.main{
  display: flex;
  margin:10px 100px;
  flex-wrap: wrap;
}
.left{
  padding: 0;
  margin:0;
  width:60%;
}
.right{
  padding:0;
  margin:60px 0 0 100px;
  width:20%;
}
</style>
