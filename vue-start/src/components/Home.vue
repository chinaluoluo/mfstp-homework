<template>
<div>
  <span>home</span>
  <v-link href="/about">about</v-link>
  <v-link href="/">home</v-link>
</div>
</template>

<script>
import vLink from './vLink'
import About from './About'
export default {
  components : {
      vLink
    }
}
</script>

<style scoped>

</style>
