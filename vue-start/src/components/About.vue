<template>
<div>
  <span>about</span>
  <v-link href="/">home</v-link>
  <v-link href="/about">about</v-link>
</div>
</template>

<script>

import vLink from './vLink'

export default {
  name: 'about',
  components : {vLink}
}
</script>

<style scoped>

</style>
