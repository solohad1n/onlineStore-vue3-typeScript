<script setup lang="ts">
  import { reactive } from 'vue'
  import { Header } from '@/widgets/Header'
  import { BottomTabNavigator } from '@/widgets/bottom-tab-navigator'
  import { Footer } from '@/widgets/footer'
  import { Content } from '@/shared/content'
  import { Carousel } from '@/features/carousel'
  import { Cards } from '@/widgets/cards'
  import { Container } from '@/shared/container'
  import product1PNG from "@/assets/product-1.png";

  const saleCards = reactive({
  data: {
    title: "Акции",
    listLinkText: "Все акции",
    listLinkHref: "/",
    items: [
      {
        img: product1PNG,
        name: "Г/Ц Блинчики с мясом вес, Россия",
        sale: 50,
      }
    ]
  }
});
</script>

<template>
    <Header/>
    <BottomTabNavigator/>
    <Content>
      <Carousel/>
      <Container class="home__container">
        <Cards :data="saleCards.data"/>
      </Container>
    </Content>
    <Footer/>
</template>


<style scoped>
  .home__container {
    margin: 80px auto;
  }
</style>