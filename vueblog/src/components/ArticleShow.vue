
<template>
<div class="main">
<div class="title">{{article.title}}</div>
<div clas="author">前端·456,123·浏览789</div>
<div>
    <p>{{article.content}}</p>
</div :article="article">
    <router-link class="showmain" :to="{path: '/article/'+article.id, query: {art:article}}" >| 查看文章 |</router-link>
</div>
</template>

<script>

export default {
  name: 'ArticleShow',
  props:{
    article:{
          required:true
    }
  },
  data () { 
    return {
    
    }
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{
   margin:0;
   padding: 10px 70px 0 70px;
  display: block;
}
.title{
    font-size: 25px;
    margin-bottom: 20px;
    
}
.author{
    font-size: 10px;
    color: gainsboro;
}
p{
  text-align: left;
}
.showmain{
  
    font-weight:1000;
}
a{
    display: block;
}
</style>
