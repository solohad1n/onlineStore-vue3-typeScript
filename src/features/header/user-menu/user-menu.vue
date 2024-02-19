<script lang="ts" setup>
  import { Avatar } from '@/shared/avatar'
  import { Typography } from '@/shared/typography'
  import { Button } from '@/shared/button'
  import { Icon } from '@/shared/icon';
  import {ref} from 'vue'
  import { usePersonStore } from '@/entities/person'

  interface Props {
    data: {
      avatar: string;
      name: string;
      menu: { label: string; link?: string; action?: string }[];
    }
  }
  const { data } = defineProps<Props>()
  const isOpen = ref(false)
  const personStore = usePersonStore()



  const { setIsAuth } = personStore

  const toggleMenu = () => {
    isOpen.value = !isOpen.value
  }

  const onClickItem = (action?: string) => {
    if(action === 'logout') {
      setIsAuth(false)
    }
  }

</script>

<template>
  <div :class="['user-menu', `is-open_${isOpen}` ]">
    <Avatar class="user-menu__avatar" :img="data.avatar" @click="toggleMenu"/>
    <Typography class="user-menu__name" size="s" tagName="span" @click="toggleMenu">{{ data.name }}</Typography>
    <Button decoration="none" class="user-menu__button" @click="toggleMenu">
      <template v-slot:leftIcon>
        <Icon type="chevron" />
      </template>
    </Button>
    <ul v-if="isOpen" class="user-menu__list">
      <li v-for="item in data.menu" :key="item.label" class="list__item">
        <RouterLink v-if="item.link" :to="item.link" class="item__link">
          <Typography tagName="span" size="m" class="item__text">{{ item.label }}</Typography>
        </RouterLink>
        <Typography
          v-else
          tagName="span"
          size="m"
          class="item__text"
          @click="() => onClickItem(item.action)"
        >{{ item.label }}</Typography>
      </li>
    </ul>
  </div>
</template>

<style scoped>
  .user-menu {
    display: grid;
    grid-template-columns: max-content 1fr max-content;
    align-items: center;
    grid-gap: 10px;
    padding: 8px;
    border-radius: 4px;
  }
  .user-menu.is-open_true {
    background-color: var(--main-surface);
    box-shadow: var(--shadow-default-s);
  }

  .user-menu__avatar,
  .user-menu__name,
  .user-menu__button {
    cursor: pointer;
  }

  .user-menu__list {
    display: grid;
    grid-gap: 10px;
    grid-column: 1/4;
  }

  .list__item {
    padding: 8px;
    cursor: pointer;
    user-select: none;
  }

  @media screen and (max-width: 1207px) {
  .user-menu {
    grid-template-columns: 1fr;
  }

  .user-menu__list {
    grid-column: unset;
  }

  .user-menu__name,
  .user-menu__button {
    display: none;
  }
}

@media screen and (max-width: 1207px) {
  .header__container {
    grid-gap: 20px;
  }

  .header__catalog {
    width: unset;
    margin-left: unset;
  }

  .header__login-btn {
    width: max-content;
  }

  .header__login-btn:deep(.typography),
  .header__catalog:deep(.typography) {
    display: none;
  }

  .header__catalog:deep(.button) {
    width: max-content;
  }

  .header__search {
    margin-left: unset;
  }

  .header__user-menu {
    width: 56px;
  }

  .header__user-menu:deep(.user-menu) {
    width: max-content;
  }

  .header__navigation {
    margin: 0;
  }
}

@media screen and (max-width: 767px) {
  .header__navigation,
  .header__user-menu,
  .header__catalog {
    display: none;
  }

  .header__logo {
    display: flex;
    align-items: center;
  }

  .header__logo:deep(svg) {
    width: 39px;
  }

  .header__search {
    width: 100%;
  }
}
</style>