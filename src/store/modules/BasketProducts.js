export default {
  state: {
    // count: 10999,
    // name: 'Ivan',
    CountProductsInBasket: 3,
    AllPriceProductsInBasket: 6120,
    basketList: [
      {
        id: 1,
        img: require('@/assets/images/1.png'),
        title: 'Устрицы по рокфеллеровски',
        description: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры',
        price: 2700
      },
      {
        id: 2,
        img: require('@/assets/images/2.png'),
        title: 'Свиные ребрышки на гриле с зеленью',
        description: 'Не следует, однако забывать, что реализация намеченных плановых',
        price: 1600
      },
      {
        id: 3,
        img: require('@/assets/images/3.png'),
        title: 'Креветки по-королевски в лимонном соке',
        description: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу',
        price: 1820
      }
    ]
  },
  getters: {
    getBasketList: state => state.basketList,
    getCountProductsInBasket: state => state.CountProductsInBasket,
    getAllPriceProductsInBasket: state => state.AllPriceProductsInBasket
  },
  mutations: {
  },
  actions: {
  }
}
