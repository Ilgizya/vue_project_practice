<template>
  <main class="main">
    <div :class="{
      'container main__wrapper': true,
      'main__wrapper_column': columnCard,
      'container__basketSize': columnCard
    }">

    <CardProduct
      :horizontally="columnCard"
      v-for="(item, i) in listArray"
      :key="i"
      :id="item.id"
      :preview="item.img"
      :title="item.title"
      :description="item.description"
      :price="item.price"
      @clickCard="$emit('clickCard', item)"
    />

    </div>
  </main>
</template>

<script>
// import {ref} from 'vue'
import CardProduct from '@/components/elements/CardProduct.vue'

export default {
  name: 'ListProducts',
  components: {
    CardProduct
  },
  props: {
    minusHeight: {
      type: String,
      default: '175px'
    },
    columnCard: {
      type: Boolean,
      default: false
    },
    listArray: {
      type: Array,
      default: () => {}
    }
  },
  setup () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.main{
  display: flex;
  height: calc(100vh - v-bind(minusHeight));
  justify-content: center;
  align-items: flex-start;
  background-color: var(--bg-color);
  color: var(--bg-color-text);
  font-family: Montserrat;
  overflow: auto;
}
.main__wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 50px;
  gap: 35px 15px;
}

.main__wrapper_column {
    display: block;
}

</style>
