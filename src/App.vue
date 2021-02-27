<template>
  <Frame>
    <router-view></router-view>
  </Frame>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Frame from './components/Frame.vue'

export default defineComponent({
  name: 'App',
  components: { Frame },
})
</script>

<style>
</style>