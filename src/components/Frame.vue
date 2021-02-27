<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="h-screen flex overflow-hidden bg-gray-100">
    <!-- Static sidebar for desktop -->
    <Sidenav />
    <div class="flex flex-col w-0 flex-1 overflow-hidden">
      <main class="flex-1 relative z-0 overflow-y-auto focus:outline-none">
        <slot></slot>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Sidenav from './Sidenav.vue'

export default defineComponent({
  name: 'Frame',
  // props: {
  //   msg: {
  //     type: String,
  //     required: true,
  //   },
  // },
  components: {
    Sidenav,
  },
})
</script>

<style>
</style>