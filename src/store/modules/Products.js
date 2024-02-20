import products from '@/modules/products'
import { v4 as uuidv4 } from 'uuid'

export default {
  state: {
    // count: 10999,
    // name: 'Ivan',
    ProductsList: products,
    CountProductsInBasket: 0,
    AllPriceProductsInBasket: 0,
    BasketList: []
  },
  getters: {
    // getCount: state => state.count,
    // getName: state => state.name,
    getProductsList: state => state.ProductsList,
    getBasketList: state => state.BasketList,
    getCountProductsInBasket: state => state.CountProductsInBasket,
    getAllPriceProductsInBasket: state => state.AllPriceProductsInBasket
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
      // console.log('uuidv4', uuidv4)
      state.CountProductsInBasket = state.BasketList.length
      state.AllPriceProductsInBasket = state.BasketList.reduce((last, item) => {
        return last + item.price
      }, 0).toLocaleString('ru-RU').replace(/\u00a0/g, ' ')
      // .toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1')
    },
    SetBasketRemoveItem (state, val) {
      // console.log('val: ', val)
      state.BasketList = state.BasketList.filter(item => {
        return item.idx !== val
      })
      state.CountProductsInBasket = state.BasketList.length
      state.AllPriceProductsInBasket = state.BasketList.reduce((last, item) => {
        return last + item.price
      }, 0).toLocaleString('ru-RU').replace(/\u00a0/g, ' ')
    }
  },
  actions: {
  }
}
