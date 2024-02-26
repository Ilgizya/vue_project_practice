<template>
  <div class="product">
    <Header
     isProduct
     headerTitle=""
    />

    <div class="container main">
      <div class="card__image">
        <img class="card__preview" :src="product.img" alt="">
      </div>

      <div class="filling">
        <div class="card__description">
          <h2 class="card__name">
            {{ product.title }}
          </h2>
          <p class="card__product_description" v-if="!horizontally">
            {{ product.description }}
          </p>
        </div>

        <div class="price_and_button">
          <div class="price">
            <h2>{{ product.price.toLocaleString('ru-RU').replace(/\u00a0/g, ' ') }} ₽</h2>
          </div>
          <!-- <BigButton :bigButtonTitle = "isAddedToCart ? 'Добавлено' : 'В корзину'"
          buttonAdd
          @click="addInBasket"/> -->
          <BigButton bigButtonTitle="В корзину"
          @click="addInBasket"
          />
        </div>
      </div>

    </div>
  </div>
</template>

<script>
// import { onMounted } from 'vue'
import { ref, computed, onBeforeMount } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

import Header from '@/components/blocks/HeaderMain.vue'
import BigButton from '@/components/ui/BigButton.vue'
// import ListProducts from '@/components/blocks/Main.vue'

export default {
  name: 'ProductPage',
  components: {
    Header,
    BigButton
    // ListProducts
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

    const route = useRoute()

    const product = computed(() => {
      return store.getters.getProductItem
    })

    onBeforeMount(() => {
      store.commit('SetProductItem', route.params.id)
    })

    const isAddedToCart = ref(false)

    const addInBasket = () => {
      store.commit('SetBasketList', product.value.id)
    }

    return {
      BasketList,
      OrderPrice,
      product,
      addInBasket,
      isAddedToCart
    }
  }
}
</script>

<style lang="scss" scoped>
.product {
  background-image: url("@/assets/images/background.png");
  background-size: cover;
  background-position: auto;
  color: var(--bg-color-text);
  background-repeat: no-repeat;

  :deep(header) {
    background-color: transparent;
    padding: auto 70px;
  }
}

.main {
  display: flex;
  align-items: center;
  border: none;
  height: calc(100vh - 330px);
  justify-content: space-between;
  gap: 200px;
  color: var(--bg-color-text);
  font-family: Montserrat;
  padding: 45px 140px 110px 70px;
  flex-direction: row;
}

.filling{
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  flex-direction: column;
  margin-bottom: 20px;
}
.card__description {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap:20px;
}
.card__name {
  color: var(--bg-color-hover);
  font-size: 30px;
  font-weight: 500;
  line-height: 21px;
  text-align: left;
}

.card__product_description {
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
}

.price_and_button {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 35px auto auto auto;
    width: 100%;
  }

  .card__preview {
    align-self: flex-start;
    width: 500px;
    margin: 0 0;
  }
</style>
