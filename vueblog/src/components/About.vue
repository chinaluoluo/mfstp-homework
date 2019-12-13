<template>
<div class="main">
    <h1>About Me</h1>
    <img src='../assets/logo.png'>
    <p>Responsive web design offers us a way forward, finally allowing us to design for the ebb and flow of things. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly.<br />
Responsive web design offers us a way forward, finally allowing us to design for the ebb and flow of things. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly.</p>
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
   margin:0 200px;
   display: block;
}
p{
    text-align: left;
}
.articletitle{
    font-size: 25px;
    
}
a{
    display: block;
}
</style>
