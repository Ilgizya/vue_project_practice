<template>
  <div class="card">

    <div class="card__image">
      <img class="card__preview" :src="preview" alt="">
    </div>

    <div class="card__description">
      <h2 class="card__name">
        {{ title }}
      </h2>
      <p class="card__product_description">
        {{ description }}
      </p>
    </div>

    <div class="price_and_button">
      <div class="price">
        <h2>{{ price }}</h2>
      </div>
        <Button class="card__button"/>
    </div>
  </div>
</template>

<script>
// import {ref} from 'vue'
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
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    price: {
      type: String,
      default: ''
    }
  },
  setup () {
  }
}
</script>

<style lang="scss" scoped>
.card {
  //position: relative;
  //width: 300px;
  width: 24%;
  //height: 550px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  border: 1px solid rgb(213, 140, 81);
  padding: 40px 20px 30px 20px;
  justify-content: flex-start;
  //margin: 35px;
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

.card__button:hover {
    background-color: var(--bg-color-hover);
}
</style>
