<template>
  <main class="main">
    <div class="container main__wrapper">
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
  },
  setup () {
  }
}
</script>

<style lang="scss" scoped>
.main{
  display: flex;
  //width: 1500px;
  height: calc(100vh - v-bind(minusHeight));
  justify-content: center;
  align-items: flex-start;
  background-color: var(--bg-color);
  color: var(--bg-color-text);
  font-family: Montserrat;
}
.main__wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content:space-between;
  margin-bottom: 50px;
  gap: 35px 15px;
}
</style>
