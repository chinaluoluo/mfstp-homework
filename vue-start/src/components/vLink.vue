<template>
<a @click="click">
    <slot></slot>
</a>

</template>

<script>
export default {
  name: 'vlink',
  props:{
      href:{
          type:String,
          required:true
      }
  },
  methods: {
      click(e){
          e.preventDefault();
          let path = this.href;
          this.$root.currentRoute = path;
          window.history.pushState(null,null,path);
      }
  },
}
</script>

<style scoped>

</style>
