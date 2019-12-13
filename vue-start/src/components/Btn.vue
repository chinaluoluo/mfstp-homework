<template>
 <button @click="btnclick">{{a}}</button>
</template>
<script>
export default {
  name: 'btn',
  data () {
    return {
      a: 0
    }
  },
  methods: {
    btnclick: function () {
      this.a++
      this.$emit('btnclick')
    }
  }
}
</script>

<style scoped>

</style>
