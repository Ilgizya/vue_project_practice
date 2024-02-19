<template>
  <Header
   isBasket
   smallContainer
   headerTitle="Корзина с выбранными товарами"
  />
  <ListProducts
   columnCard
   minusHeight="246px"
  />

  <footer>
    <div class="container__basketSize footer__wrapper">
      <div class="footer__text">
        <p class="footer__header">  Заказ на сумму:  </p>
      <span class="footer__price">6 220 ₽</span>
      </div>
      <button class="footer__button">Оформить заказ</button>
    </div>
  </footer>
</template>

<script>
// @ is an alias to /src
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
