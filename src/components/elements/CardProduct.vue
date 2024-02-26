<template>
  <div
    :class="{
      'card': true,
      'card_horizontally': horizontally
    }"
    @click="router.push(`/product/${id}`)"
    >
    <div class="card__image">
      <img class="card__preview" :src="preview" alt="">
    </div>

    <div class="card__description">
      <h2 class="card__name">
        {{ title }}
      </h2>
      <p class="card__product_description" v-if="!horizontally">
        {{ description }}
      </p>
    </div>

    <div class="price_and_button">
      <div class="price">
        <h2>{{ price.toLocaleString('ru-RU').replace(/\u00a0/g, ' ') }} ₽</h2>
      </div>
        <Button
        class="card__button" @click.stop="$emit('clickCard')"/>
    </div>
  </div>
</template>

<script>
// import {ref} from 'vue'
import { useRouter } from 'vue-router'
import Button from '@/components/ui/Button.vue'

export default {
  name: 'CardProducts',
  components: {
    Button
  },
  props: {
    preview: {
      type: String,
      default: ''
    },
    id: {
      type: Number,
      default: 0
    },
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    price: {
      type: Number,
      default: 0
    },
    horizontally: {
      type: Boolean,
      default: false
    }
  },
  setup () {
    const router = useRouter()

    return {
      router
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  border: 1px solid var(--bg-color-hover);
  padding: 40px 20px 30px 20px;
  justify-content: space-between;
}

.card_horizontally{
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  border: none;
  padding-left: 0;
  padding-right: 0;

  :deep(button) {
    transform: rotate(45deg);
    border: 2px solid var(--bg-color-hover);
    color: var(--bg-color-hover);

    &:hover {
      color:var(--bg-color-text);
    }
  }

  .card__preview {
    align-self: flex-start;
    width: 150px;
    margin: 0 0;
  }

  .card__description {
    margin:  0 250px 0 100px;
  }
  .card__name {
    margin: 0 0;
  }

  .price_and_button{
    color: var(--bg-color-hover);
    justify-content: flex-end;
    gap: 15px;
    margin: 0 0 0 auto;
    width: 100%;
  }

}

.card:hover .card__name,
.card:hover .card__product_description,
.card:hover .price {
    color: var(--bg-color-hover);
}

.card__image{
  margin-bottom: 30px;
  //display: flex;
  //justify-content: center;
  //align-items: center;
}
.card__preview {
  width: 100%;
  //height: 240px;
}

.card__description {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  //margin-top: 30px;
  gap:10px;
  margin-bottom: 20px;
}
.card__name {
  //color: var(--bg-color-text);
  //font-family: Montserrat;
  font-size: 17px;
  font-weight: 500;
  line-height: 21px;
  //letter-spacing: 0%;
  text-align: left;
}

.card__product_description {
  //color: var(--bg-color-text);
  //font-family: Montserrat;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
}
.price_and_button{
  display: flex;
  flex-direction:row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  //gap: 140px;
  //justify-content: center;
  //position: absolute;
  //bottom: 30px;
  margin-top: auto;
}
.price {
  //color: var(--bg-color-text);
  //font-family: Montserrat;
  font-size: 17px;
  font-weight: 500;
  line-height: 21px;
  //letter-spacing: 0%;
  text-align: left;
}

// .card__button:hover {
//   background-color: var(--bg-color-hover);
//   color: var(--bg-color-text);
//   font-size: 25px;
// }

</style>
