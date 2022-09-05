import axios from 'axios';

const state = {
  mbMenuData : []
}
const actions = {
  fetchMbMenu({commit}){
    axios.get('./data/mbmenu.json')
    .then(response => {
      commit('MBMENU',response.data)
    })
    .catch(err => console.log(err))
  }
}
const mutations = {
  MBMENU(state, payload){
    state.mbMenuData = payload
  }
}
const getters = {
  getMbData(state){
    return state.mbMenuData
  }
}
export default {state, actions, mutations, getters}