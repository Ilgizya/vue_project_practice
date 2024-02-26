<template>
  <header class="header" ref="header">
    <div
     :class="{
      'container header__wrapper': true,
      'container__basketSize': smallContainer
      }">
      <router-link to='/'
       v-if="isBasket"
       style="text-decoration: none;"
      >
        <Button buttonTitle="←"/>
      </router-link>

      <Button v-if="isProduct" buttonTitle="←" @click="goBack"/>

      <h1 class="header__name">
        {{ headerTitle }}
      </h1>

      <div class="header__basket">
        <p class="basket__description" v-if="!isBasket || isProduct">
          {{ count }} {{ count === 1 ? 'товар' : (count >= 2 && count <= 4 ? 'товара' : 'товаров') }} <br/>
          на сумму {{ OrderPrice }} ₽
        </p>
        <router-link to="/basket" v-if="!isBasket || isProduct">
          <basketIcon class="basket__icon"/>
        </router-link>
        <BigButton class="bigBtn" @click.stop="buttonOut"/>
      </div>
    </div>
  </header>
</template>

<script>
// import {ref} from 'vue'
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

import basketIcon from '@/components/icons/basketIcon.vue'
// import backIcon from '@/components/icons/backIcon.vue'
import Button from '@/components/ui/Button.vue'
import BigButton from '@/components/ui/BigButton.vue'

export default {
  name: 'HeaderPage',
  components: {
    // backIcon,
    basketIcon,
    Button,
    BigButton
  },
  props: {
    isBasket: {
      type: Boolean,
      default: false
    },
    smallContainer: {
      type: Boolean,
      default: false
    },
    headerTitle: {
      type: String,
      default: ''
    },
    isProduct: {
      type: Boolean,
      default: false
    }
  },
  setup () {
    const store = useStore()
    const router = useRouter()

    const count = computed(() => {
      return store.getters.getCountProductsInBasket
    })

    const OrderPrice = computed(() => {
      return store.getters.getAllPriceProductsInBasket
    })

    const buttonOut = () => {
      localStorage.isAuth = JSON.stringify(false)
      router.push('/authorization')
    }
    return {
      count,
      OrderPrice,
      buttonOut
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.header{
  background-color: var(--bg-color);
  font-family: Montserrat;
  color: var(--bg-color-text);
  padding: 48px 0 75px 0;

  :deep(.button) {
    border: 1px solid var(--bg-color-hover);
    color: var(--bg-color-hover);

    &:hover {
      color: inherit;
    }
  }

  :deep(.bigBtn) {
    &:hover {
      color: var(--bg-color);
    }
  }
}

.header__wrapper{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header__basket{
  display: flex;
  align-items: center;
  gap: 0 20px;
}
.header__name{
  font-size: 31px;
  font-weight: 700;
  line-height: 38px;
  text-align: left;
  text-transform: uppercase;
}

.basket__description{
  font-size: 17px;
  font-weight: 500;
  line-height: 21px;
  text-align: right;
}
</style>
