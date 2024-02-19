import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import {type Person} from './types'
import avatarPNG from '@/assets/avatar.png'

export const usePersonStore = defineStore('person', () => {
  const isAuth = ref<boolean>(true)
  const person = reactive<Person>({
    name: 'Алёша-001',
    avatar: avatarPNG
  })

  const setIsAuth = (value: boolean) => isAuth.value = value

  return { isAuth, person, setIsAuth }
})
