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

export default {
  name: 'MainPage',
  data () {
    return {
      articles:[
        {
          id:1,
          title:"文章名字1" 
        },
        {
          id:2,
          title:"文章名字2" 
        },
        {
          id:3,
          title:"文章名字3" 
        }
      ]
    }
  },
  components:{
    TopNav,
    RecentArticle,
    ArticleByTime,
    Target,
    ArticleShow
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
