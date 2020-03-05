import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);
const apiKey = '9e98a27086c4f16d39f1b7e7a2fd1970';

export default new Vuex.Store({
  state: {
    movies: [],
    genrelist: [],
    searchText: '',
  },

  mutations: {
    updateMovies(state, movies) {
      state.movies = movies;
    },
    updateGenrelist(state, genrelist) {
      state.genrelist = genrelist;
    },
    updateSearchText(state, searchText) {
      state.searchText = searchText;
    },
  },

  actions: {
    getMovies({ commit }) {
      const requestArr = Array
        .from({ length: 5 }) // 20*5 movies
        .map((_, i) => axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${i + 1}`));

      Promise.all(requestArr)
        .then((res) => res.reduce((acc, cur) => acc.concat(...cur.data.results), []))
        .then((movies) => {
          commit('updateMovies', movies);
        });
    },
    getGenrelist({ commit }) {
      axios
        .get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`)
        .then((res) => {
          commit('updateGenrelist', res.data.genres);
        });
    },
  },

  modules: {
  },
});
