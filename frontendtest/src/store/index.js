import { createStore } from 'vuex'
import axios from 'axios'

const url = 'https://skatehub.onrender.com/'

export default createStore({
  state: {
    skateboards: null,
    postResponse: null,
    selectedProduct: null,
  },
  getters: {
    getProduct(state) {
      return state.selectedProduct;
    },
  },
  mutations: {
    setSkate(state, data) {
      state.skateboards = data;
    },
    setPostResponse(state, response) {
      state.postResponse = response;
    },
    setSelectedProduct(state, product) {
      state.selectedProduct = product;
    },
  },
  actions: {
    async fetchBoards({ commit }) {
      const fetchedBoards = await axios.get(`${url}products`);
      commit("setSkate", fetchedBoards.data.results);
    },

    async submitContent({ commit }, formData) {
      try {
        const response = await axios.post(`${url}users`, formData);
        commit("setPostResponse", response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    },

    async fetchProduct({ commit }, skateID) {
      try {
        const response = await axios.get(`${url}product/${skateID}`);
        commit("setSelectedProduct", response.data.result[0]);
        return response.data.result;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
  },
  modules: {},
});
