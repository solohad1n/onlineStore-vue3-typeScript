<script setup lang="ts">
  import { Header } from '@/widgets/Header'
  import { BottomTabNavigator } from '@/widgets/bottom-tab-navigator'
  import { Footer } from '@/widgets/footer'
  import { Content } from '@/shared/content'
  import { Carousel } from '@/features/carousel'
</script>

<template>
    <Header/>
    <BottomTabNavigator/>
    <Content>
      <Carousel/>
    </Content>
    <Footer/>
</template>


<style scoped>

</style>