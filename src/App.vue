<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-toolbar-title
        style="width: 150px"
        class="ml-0 pl-4 hidden-sm-and-down"
      >
        <span>Top Movies</span>
      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Search"
        v-model="searchText"
        v-on:keyup.native="onKeyup"
      />

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/normanlinnet/popular-movies"
        target="_blank"
        text
      >
        <span class="mr-2">Github</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <Movie/>
    </v-content>
  </v-app>
</template>

<script>
import Movie from '@/components/Movie';

export default {
  name: 'App',

  components: {
    Movie,
  },

  data: () => ({
    searchText: '',
  }),

  mounted() {
    this.$store.dispatch('getGenrelist');
    this.$store.dispatch('getMovies');
  },

  methods: {
    onKeyup() {
      this.$store.commit('updateSearchText', this.searchText);
    },
  },
};
</script>
