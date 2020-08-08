import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    initialstate: 'liststate',
    title: 'My simple title',
    links: [
      'https://auction.violity.com/105077960?_ga=2.41661602.1017193479.1596319334-2097728473.1584983538',
      'https://auction.violity.com',
      'https://auction.violity.com/105083422-troyak-sigizmunda-1593-goda'
    ]
  },
  mutations: {
    increment (store) {
      console.log(store)
      store.initialstate = 'asdasdsa dssa dsa das'
      console.log(store)
    }
  },
  actions: {
    increment (context) {
      context.commit('increment')
    }
  },
  modules: {
  }
})
