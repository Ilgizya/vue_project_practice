<template>
  <Header
   isBasket
   smallContainer
   headerTitle="Корзина с выбранными товарами"
  />
  <ListProducts
   columnCard
   minusHeight="246px"
   :listArray="BasketList"
   @clickCard="clickCard"
  />
  <!-- <div>
    {{ count }}
  </div> -->
  <footer>
    <div class="container__basketSize footer__wrapper">
      <div class="footer__text">
        <p class="footer__header">  Заказ на сумму:  </p>
      <span class="footer__price"> {{ OrderPrice }} ₽</span>
      </div>
      <button class="footer__button">Оформить заказ</button>
    </div>
    <!-- <p class="footer__text">
    счетчик : {{ countInBasket }}</p>
    <span class="footer__text">имя: {{ nameInBasket }}</span> -->
  </footer>
</template>

<script>
// import { onMounted } from 'vue'
import { computed } from 'vue'
import { useStore } from 'vuex'

import Header from '@/components/blocks/HeaderMain.vue'
import ListProducts from '@/components/blocks/Main.vue'

export default {
  name: 'BasketPage',
  components: {
    Header,
    ListProducts
  },
  props: {
  },
  setup () {
    const store = useStore()

    const BasketList = computed(() => {
      console.log(store.getters.getBasketList)
      return store.getters.getBasketList
    })

    const OrderPrice = computed(() => {
      return store.getters.getAllPriceProductsInBasket
    })

    const clickCard = (item) => {
      // console.log('Клик по карточке из Корзины')
      store.commit('SetBasketRemoveItem', item.idx)
    }

    return {
      BasketList,
      OrderPrice,
      clickCard
    }

    // onMounted(() => {
    //   console.log('store', store)
    // })

    // const countInBasket = computed(() => {
    //   return store.getters.getCount
    // })

    // const nameInBasket = computed(() => {
    //   return store.getters.getName
    // })

    // return {
    //   countInBasket,
    //   nameInBasket
    // }
  }
}
</script>

<style lang="scss" scoped>
footer{
  padding: 30px 0;
  background-color: var(--bg-color);
  font-family: Montserrat;
  color: var(--bg-color-text);
}

.footer__wrapper{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer__text{
  display: flex;
  align-items: center;
  gap: 0 15px;
}

.footer__header{
  font-size: 21px;
  font-weight: 400;
  line-height: 26px;
  //letter-spacing: 0%;
  text-align: left;
  text-transform: uppercase;
}

.footer__price{
  color: var(--bg-color-hover);
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0%;
  text-align: left;
}

.footer__button{
  background-color: var(--bg-color-hover);
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0%;
  text-align: left;
  padding: 12px 40px;
}
</style>
