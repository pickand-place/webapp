<template>
  <div class="hidden md:flex md:flex-shrink-0">
    <div class="flex flex-col w-52">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="flex flex-col h-0 flex-1 bg-gray-800">
        <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div
            class="flex items-center flex-shrink-0 mx-auto px-4 text-gray-100 font-mono font-bold text-xl"
          >
            pickand.place
          </div>
          <nav class="mt-5 flex-1 px-2 bg-gray-800 space-y-1">
            <sidenav-item routeName="Jobs"
              ><icon-browser-gauge class="h-6 w-6 gray-300 mr-2" /> Jobs
            </sidenav-item>
            <sidenav-item routeName="Parts"
              ><icon-computer-chip-core class="h-6 w-6 gray-300 mr-2" />
              Parts
            </sidenav-item>
            <sidenav-item routeName="Feeders"
              ><icon-equipment-machine-track class="h-6 w-6 gray-300 mr-2" />
              Feeders
            </sidenav-item>
            <sidenav-item routeName="MachineSetup"
              ><icon-usb-port class="h-6 w-6 gray-300 mr-2" />
              Machine Setup
            </sidenav-item>
          </nav>
        </div>
        <div class="flex-shrink-0 flex bg-gray-700 p-4">
          <a href="#" class="flex-shrink-0 w-full group block">
            <div class="flex items-center">
              <div>
                <img
                  class="inline-block h-9 w-9 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=5d7jf1aqq0&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div class="ml-3">
                <p class="text-sm font-medium text-white">Tom Cook</p>
                <p
                  class="text-xs font-medium text-gray-300 group-hover:text-gray-200"
                >
                  View profile
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SidenavItem from './SidenavItem.vue'
import {
  IconBrowserGauge,
  IconEquipmentMachineTrack,
  IconUsbPort,
  IconWebcam2,
  IconComputerChipCore,
  IconMicrochipBoard,
  IconThunderboltCable,
} from './icons/icons'

export default defineComponent({
  name: 'Sidenav',
  components: {
    SidenavItem,
    IconBrowserGauge,
    IconEquipmentMachineTrack,
    IconUsbPort,
    IconWebcam2,
    IconComputerChipCore,
    IconMicrochipBoard,
    IconThunderboltCable,
  },
})
</script>

<style>
</style>