<template>
  <v-container>
    <v-row>
      <v-card
        class="mx-auto ma-4"
        width="350"
        @click="doSomething"
        v-for="movie in filteredmovies"
        v-bind:key="movie.title"
        hover
      >
        <v-img
          class="white--text align-end"
          height="200px"
          :src="'https://image.tmdb.org/t/p/w400' + (movie.backdrop_path || '/wwemzKWzjKYJFfCeiB57q3r4Bcm.png')"
        >
          <v-card-title>{{ movie.title }}</v-card-title>
        </v-img>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Movie',

  data: () => ({
    //
  }),

  computed: {
    filteredmovies() {
      const { movies, searchText } = this.$store.state;
      return movies
        .filter(({ title }) => title.toLowerCase().includes(searchText.toLowerCase()));
    },
  },

  methods: {
    doSomething() {

    },
  },
};
</script>
