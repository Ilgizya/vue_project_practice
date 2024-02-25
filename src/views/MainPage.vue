<template>
  <Header headerTitle="Наша продукция"/>
  <ListProducts :listArray="ProductsList"
  @clickCard="clickCard"
  />
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import Header from '@/components/blocks/HeaderMain.vue'
import ListProducts from '@/components/blocks/Main.vue'

export default {
  name: 'ProductsPage',
  components: {
    Header,
    ListProducts
  },
  props: {
  },
  setup () {
    const store = useStore()

    const ProductsList = computed(() => {
      return store.getters.getProductsList
    })

    const clickCard = (item) => {
      store.commit('SetBasketList', item.id)
    }

    return {
      ProductsList,
      clickCard
    }
  }
}
</script>

<style lang="scss" scoped>
:deep(.card) {
  width: 24%;
}
</style>
