<template>
  <Header headerTitle="Наша продукция"/>
  <ListProducts/>
</template>

<script>
// @ is an alias to /src
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
  }
}
</script>

<style lang="scss" scoped>
:deep(.card) {
  width: 24%;
}
</style>
