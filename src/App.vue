<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/basket">Basket</router-link>
  </nav> -->
  <router-view/>
</template>

<script>
import { onBeforeMount } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  name: 'App',
  components: {
  },
  props: {
  },
  setup () {
    const store = useStore()
    const router = useRouter()

    onBeforeMount(() => {
      if (!localStorage.getItem('isAuth')) {
        localStorage.setItem('isAuth', JSON.stringify(false))
      }

      if (!JSON.parse(localStorage.getItem('isAuth'))) {
        router.push('/authorization')
      }

      if (!localStorage.getItem('users')) {
        localStorage.setItem('users', JSON.stringify([]))
      }

      if (!localStorage.getItem('basket')) {
        localStorage.setItem('basket', JSON.stringify([]))
      } else {
        store.commit('SetStoreBasket')
      }
    })
  }
}
</script>

<style lang="scss" scoped>
</style>
