<template>

<div>
  <span>{{count}}</span>
  <div></div>
  <btn @btnclick="addone"></btn>
  <btn @btnclick="addone"></btn>
  <btn @btnclick="addone"></btn>
</div>
</template>

<script>
import Btn from './Btn'
export default {
  name: 'hello',
  data () {
    return {
      count: 0
    }
  },
  methods: {
    addone: function () {
      this.count++
    }
  },
  components: {Btn}
}
</script>

<style scoped>

</style>
