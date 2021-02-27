<template>
  <div></div>

  <router-link
    :to="{ name: routeName }"
    class="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"
  >
    <slot></slot>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SidenavItem',
  props: {
    routeName: {
      type: String,
      required: true,
    },
  },
})
</script>

<style>
</style>