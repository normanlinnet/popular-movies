<template>
  <v-container>
    <input v-model="searchText" placeholder="Search">
      <ul>
        <li v-for="movie in filteredmovies" v-bind:key="movie.title">
          {{ movie.title }}
        </li>
      </ul>
  </v-container>
</template>

<script>
export default {
  name: 'Movie',

  data: () => ({
    searchText: '',
  }),

  computed: {
    filteredmovies() {
      return this.$store.state.movies
        .filter(({ title }) => title.toLowerCase().includes(this.searchText.toLowerCase()));
    },
  },
};
</script>
