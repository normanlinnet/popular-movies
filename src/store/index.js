import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies: [],
  },
  mutations: {
    updateMovies(state, movies) {
      state.movies = movies;
    },
  },
  actions: {
    getMovies({ commit }) {
      const requestArr = Array
        .from({ length: 5 }) // 20*5 movies
        .map((_, i) => axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=9e98a27086c4f16d39f1b7e7a2fd1970&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${i + 1}`));

      Promise.all(requestArr)
        .then((res) => res.reduce((acc, cur) => acc.concat(...cur.data.results), []))
        .then((movies) => {
          commit('updateMovies', movies);
        });
    },
  },
  modules: {
  },
});
