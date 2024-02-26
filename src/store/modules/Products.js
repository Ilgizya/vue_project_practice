import products from '@/modules/products'
import { v4 as uuidv4 } from 'uuid'

export default {
  state: {
    ProductsList: products,
    CountProductsInBasket: 0,
    AllPriceProductsInBasket: 0,
    BasketList: [],
    Product: null
  },
  getters: {
    getProductsList: state => state.ProductsList,
    getBasketList: state => state.BasketList,
    getCountProductsInBasket: state => state.CountProductsInBasket,
    getAllPriceProductsInBasket: state => state.AllPriceProductsInBasket,
    getProductItem: state => state.Product
  },
  mutations: {
    SetBasketList (state, val) {
      state.ProductsList.forEach(item => {
        if (item.id === val) {
          const itemBasket = {
            id: item.id,
            idx: uuidv4(),
            img: item.img,
            title: item.title,
            price: item.price
          }
          state.BasketList.push(itemBasket)
        }
      })

      localStorage.basket = JSON.stringify(state.BasketList)

      state.CountProductsInBasket = state.BasketList.length
      state.AllPriceProductsInBasket = state.BasketList.reduce((last, item) => {
        return last + item.price
      }, 0).toLocaleString('ru-RU').replace(/\u00a0/g, ' ')
    },
    SetStoreBasket (state, val) {
      state.BasketList = JSON.parse(localStorage.getItem('basket'))
    },
    SetBasketRemoveItem (state, val) {
      state.BasketList = state.BasketList.filter(item => {
        return item.idx !== val
      })

      localStorage.basket = JSON.stringify(state.BasketList)

      state.CountProductsInBasket = state.BasketList.length
      state.AllPriceProductsInBasket = state.BasketList.reduce((last, item) => {
        return last + item.price
      }, 0).toLocaleString('ru-RU').replace(/\u00a0/g, ' ')
    },
    SetRemoveItemProductCard (state, val) {
      const idxRemove = state.BasketList.find(item => {
        return item.id === val
      })

      this.commit('SetBasketRemoveItem', idxRemove.idx)
    },
    SetProductItem (state, val) {
      state.Product = state.ProductsList.find(element => {
        return element.id === +val
      })
    },
    ClearBusket (state) {
      localStorage.basket = []
      localStorage.CountProductsInBasket = 0
      localStorage.AllPriceProductsInBasket = 0
      state.BasketList = []
      state.CountProductsInBasket = 0
      state.AllPriceProductsInBasket = 0
    }
  },
  actions: {
  }
}
