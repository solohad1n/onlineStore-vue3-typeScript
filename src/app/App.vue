<script setup lang="ts">
import { useScreenStore } from '@/entities/screen'
import { RouterView } from 'vue-router'
import {onMounted, onUnmounted} from 'vue'

const screenStore = useScreenStore()
const { setPlatform } = screenStore

const onResize = () => setPlatform(window.innerWidth)

onMounted(() => {
  setPlatform(window.innerWidth)
  window.addEventListener('resize', onResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', onResize)
})
</script>

<template>
  <RouterView />
</template>