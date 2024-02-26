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
    <div class="overlay" :class="{ show: showMessage }">
      <span class="footer__message">
        {{ message }}
      </span>
    </div>

  <div class="separator"></div>
  <footer>
    <div class="container__basketSize footer__wrapper">
      <div class="footer__text">
        <p class="footer__header">  Заказ на сумму:  </p>
      <span class="footer__price"> {{ OrderPrice }} ₽</span>
      </div>
      <BigButton bigButtonTitle = "Оформить заказ" buttonAdd  class="footer__button" @click="PlaceAnOrder"/>
    </div>
  </footer>
</template>

<script>
// import { onMounted } from 'vue'
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

import Header from '@/components/blocks/HeaderMain.vue'
import ListProducts from '@/components/blocks/Main.vue'
import BigButton from '@/components/ui/BigButton.vue'

export default {
  name: 'BasketPage',
  components: {
    Header,
    ListProducts,
    BigButton
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
      store.commit('SetBasketRemoveItem', item.idx)
    }

    const showMessage = ref(false)
    const message = ref('')
    const PlaceAnOrder = () => {
      if (BasketList.value.length > 0) {
        store.commit('ClearBusket')
        showMessage.value = true
        message.value = 'Заказ оформлен.'
      } else {
        showMessage.value = true
        message.value = 'Корзина пуста.'
      }
    }

    return {
      BasketList,
      OrderPrice,
      clickCard,
      PlaceAnOrder,
      showMessage,
      message
    }
  }
}
</script>

<style lang="scss" scoped>
footer {
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
  width: auto;
}

.separator {
  height: 2px;
  background-color: var(--bg-color-hover);
}

.overlay {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px;
  z-index: 99;
  display: none;
}

.overlay.show {
  display: block;
}

.footer__message {
  font-size: 50px;
  line-height: 1;
  text-align: center;
  color: var(--bg-color-hover);
}
</style>
