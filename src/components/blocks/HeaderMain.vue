<template>
  <header class="header" ref="header">
    <div
     :class="{
      'container header__wrapper': true,
      'container__basketSize': smallContainer
      }">
      <router-link to="/"
       v-if="isBasket"
       style="text-decoration: none;"
      >
        <!-- <backIcon class="basket__icon"/> -->
        <Button buttonTitle="←"/>
      </router-link>

      <h1 class="header__name">
        {{ headerTitle }}
      </h1>

      <div class="header__basket">
        <p class="basket__description" v-if="!isBasket">
          3 товара<br/>
          на сумму 3 500 ₽
        </p>
        <router-link to="/basket" v-if="!isBasket">
          <basketIcon class="basket__icon"/>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
// import {ref} from 'vue'
import basketIcon from '@/components/icons/basketIcon.vue'
// import backIcon from '@/components/icons/backIcon.vue'
import Button from '@/components/ui/Button.vue'

export default {
  name: 'HeaderPage',
  components: {
    // backIcon,
    basketIcon,
    Button
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
    }
  }
  // },
  // setup () {
  // },
  // data () {
  //   return {
  //     minusHeight: 0
  //   }
  // },
  // mounted () {
  //   this.minusHeight = this.$refs.header.clientHeight
  // }
}
</script>

<style lang="scss" scoped>
.header{
  //width: 1500px;
  //position: fixed;
  background-color: var(--bg-color);
  font-family: Montserrat;
  color: var(--bg-color-text);
  //display: flex;
  //flex-direction: row;
  //justify-content: center;
  //align-items: center;
  padding: 48px 0 75px 0;
  //padding-bottom: 75px;

  //position: fixed;
  //width: 100%;

  :deep(button) {
    border: 1px solid var(--bg-color-hover);
    color: var(--bg-color-hover);

    &:hover {
      color: inherit;
    }
  }
}

.header__wrapper{
  display: flex;
  //flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.header__basket{
  display: flex;
  align-items: center;
  gap: 0 20px;
}
.header__name{
  //color: var(--bg-color-text);
  //font-family: Montserrat;
  font-size: 31px;
  font-weight: 700;
  line-height: 38px;
  //letter-spacing: 0%;
  text-align: left;
  text-transform: uppercase;
}

.basket__description{
  //color: var(--bg-color-text);
  //font-family: Montserrat;
  font-size: 17px;
  font-weight: 500;
  line-height: 21px;
  text-align: right;
  //margin-left: 850px;
}
.basket__icon{
  //margin-left: 20px;
}
</style>
