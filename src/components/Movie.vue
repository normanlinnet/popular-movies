<template>
  <v-container>
    <v-row>
      <Card
        v-for="movie in filteredmovies"
        v-bind:key="movie.id"
        :movie="movie"
      />
    </v-row>
  </v-container>
</template>

<script>
import Card from '@/components/Card';

export default {
  name: 'Movie',

  components: {
    Card,
  },

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
