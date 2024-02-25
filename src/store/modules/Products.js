import products from '@/modules/products'
import { v4 as uuidv4 } from 'uuid'

export default {
  state: {
    // count: 10999,
    // name: 'Ivan',
    ProductsList: products,
    CountProductsInBasket: 0,
    AllPriceProductsInBasket: 0,
    BasketList: [],
    Product: null
  },
  getters: {
    // getCount: state => state.count,
    // getName: state => state.name,
    getProductsList: state => state.ProductsList,
    getBasketList: state => state.BasketList,
    getCountProductsInBasket: state => state.CountProductsInBasket,
    getAllPriceProductsInBasket: state => state.AllPriceProductsInBasket,
    getProductItem: state => state.Product
  },
  mutations: {
    SetBasketList (state, val) {
      // console.log('val: ', val)
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

      // console.log('uuidv4', uuidv4)
      state.CountProductsInBasket = state.BasketList.length
      state.AllPriceProductsInBasket = state.BasketList.reduce((last, item) => {
        return last + item.price
      }, 0).toLocaleString('ru-RU').replace(/\u00a0/g, ' ')
      // .toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1')
    },
    SetStoreBasket (state, val) {
      state.BasketList = JSON.parse(localStorage.getItem('basket'))
    },
    SetBasketRemoveItem (state, val) {
      // console.log('val: ', val)
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
      // console.log('val: ', val)
      state.Product = state.ProductsList.find(element => {
        return element.id === +val
      })
    }
  },
  actions: {
  }
}
