<template>
  <button
    class="py-2 px-4 bg-gray-200 rounded-lg transition hover:bg-gray-300"
    @click="connect"
  >
    Serial
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'UsbConnector',
  // props: {
  //   msg: {
  //     type: String,
  //     required: true,
  //   },
  // },
  setup: () => {
    const connect = async () => {
      if ('serial' in navigator) {
        const port = await navigator.serial.requestPort()
      }
    }
    return { connect }
  },
})
</script>

<style>
</style>