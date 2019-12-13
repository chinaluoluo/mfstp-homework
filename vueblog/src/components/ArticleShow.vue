
<template>
<div class="main">
<div class="title">{{article.title}}</div>
<div clas="author">前端·456,123·浏览789</div>
<div>
    <p>如果你是来自 React 的开发者，你可能会对 Vuex 和 Redux 间的差异表示关注，Redux 是 React 生态环境中最流行的 Flux 实现。Redux 事实上无法感知视图层，所以它能够轻松的通过一些简单绑定和 Vue 一起使用。Vuex 区别在于它是一个专门为 Vue 应用所设计。这使得它能够更好地和 Vue 进行整合，同时提供简洁的 API 和改善过的开发体验。</p>
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
