<template>
  <header class="header">
    <h1 class="header__name">
      Наша продукция
    </h1>
    <p class="basket__description">
      3 товара<br/>
      на сумму 3 500 ₽
    </p>
    <basketIcon class="basket__icon"/>
  </header>
</template>

<script>
// import {ref} from 'vue'
import basketIcon from '@/components/icons/basketIcon.vue'

export default {
  name: 'HeaderPage',
  components: {
    basketIcon
  },
  props: {
  },
  setup () {
  }
}
</script>

<style lang="scss" scoped>
.header{
  width: 1500px;
  background-color: var(--bg-color);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 75px;
}

.header__name{
  color: var(--bg-color-text);
  font-family: Montserrat;
  font-size: 31px;
  font-weight: 700;
  line-height: 38px;
  letter-spacing: 0%;
  text-align: left;
  text-transform: uppercase;
}

.basket__description{
  color: var(--bg-color-text);
  font-family: Montserrat;
  font-size: 17px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: 0%;
  text-align: right;
  margin-left: 850px;
}
.basket__icon{
  margin-left: 20px;
}
</style>
