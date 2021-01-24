<template>
  <button @click="connect">USB</button>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "UsbConnector",
  // props: {
  //   msg: {
  //     type: String,
  //     required: true,
  //   },
  // },
  setup: () => {
    const connect = async () => {
      const devices = navigator.usb.requestDevice({
        filters: [{ vendorId: 0xcafe }],
      })
    }
    return { connect }
  },
})
</script>

<style>
</style>