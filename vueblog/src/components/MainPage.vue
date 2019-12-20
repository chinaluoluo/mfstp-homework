<template>
<div>
  <div class="main"> 
      <div v-for="article in articles" class="arts">
        <article-show :article="article" ></article-show>
      </div>
  </div>
</div>
</template>

<script>
import TopNav from './TopNav'
import  RecentArticle from './RecentArticle'
import  ArticleByTime from './ArticleByTime'
import  Target from './Target'
import  ArticleShow from './ArticleShow'
import axios from 'axios'

export default {
  name: 'MainPage',
  data () {
    return {
      articles:[]
    }
  },
  components:{
    TopNav,
    RecentArticle,
    ArticleByTime,
    Target,
    ArticleShow
  },
   created:{
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.arts{
  margin:60px 0;
}
.main{
  display: flex;
  margin:10px 100px;
  flex-wrap: wrap;
}


</style>
