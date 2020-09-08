import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    shoppingList:[],
  },
  getters:{

  },
  mutations: {
    addShopping(state,item){
      let f_item = this.shoppingList.find((c_item)=>c_item.id===item.id)
      if (f_item===undefined)
      {
        state.shoppingList.push(item);
      }
    },
    deleteShopping(item){

    }
  },
  actions: {
  },
  modules: {
  }
})
