<template>
  <main class="main">
    <CardProduct
    :preview="require('@/assets/images/1.png')"
    title="Устрицы по рокфеллеровски"
    description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры"
    price="2 700 ₽"
    />
    <CardProduct
    :preview="require('@/assets/images/2.png')"
    title="Свиные ребрышки на гриле с зеленью"
    description="Не следует, однако забывать, что реализация намеченных плановых"
    price="1 600 ₽"
    />
    <CardProduct
    :preview="require('@/assets/images/3.png')"
    title="Креветки по-королевски в лимонном соке"
    description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу"
    price="1 820 ₽"
    />
    <CardProduct
    :preview="require('@/assets/images/4.png')"
    title="Устрицы по рокфеллеровски"
    description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры "
    price="2 700 ₽"
    />
    <CardProduct
    :preview="require('@/assets/images/1.png')"
    title="Устрицы по рокфеллеровски"
    description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры"
    price="2 700 ₽"
    />
    <CardProduct
    :preview="require('@/assets/images/2.png')"
    title="Свиные ребрышки на гриле с зеленью"
    description="Не следует, однако забывать, что реализация намеченных плановых"
    price="1 600 ₽"
    />
    <CardProduct
    :preview="require('@/assets/images/3.png')"
    title="Креветки по-королевски в лимонном соке"
    description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу"
    price="1 820 ₽"
    />
    <CardProduct
    :preview="require('@/assets/images/4.png')"
    title="Устрицы по рокфеллеровски"
    description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры "
    price="2 700 ₽"
    />
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
  },
  setup () {
  }
}
</script>

<style lang="scss" scoped>
.main{
  display: flex;
  flex-wrap: wrap;
  width: 1500px;
  justify-content: center;
  align-items: center;
  background-color: var(--bg-color);
}
</style>
