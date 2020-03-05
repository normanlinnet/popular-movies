<template>
  <v-dialog
    v-model="dialog"
    max-width="500"
  >
    <template v-slot:activator="{ on }">
      <v-card
        class="mx-auto ma-4"
        width="350"
        v-on="on"
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
    </template>

    <v-card>
      <v-card-title
        class="headline grey lighten-2"
        primary-title
      >
        {{ movie.title }}
      </v-card-title>

      <v-card-text class="mt-4">
        {{ movie.overview }}
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="mt-4">
        <div>
          Genres: {{ genreText }}
        </div>
        <div>
          Language: {{ movie.original_language }}
        </div>
        <div>
          Rating: {{ movie.vote_average }}
        </div>
        <div style="text-align: right">
          {{ relativeTime }}
        </div>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          text
          @click="dialog = false"
        >
          Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import moment from 'moment';

export default {
  name: 'Card',

  props: {
    movie: Object,
  },

  data: () => ({
    dialog: false,
  }),

  computed: {
    genreText() {
      const { genrelist } = this.$store.state;
      return genrelist
        .filter(({ id }) => this.movie.genre_ids.includes(id))
        .map(({ name }) => name)
        .reduce((prev, cur) => (prev + (cur ? ` | ${cur}` : '')));
    },
    relativeTime() {
      return moment(this.movie.release_date, 'YYYY-MM-DD').fromNow();
    },
  },
};
</script>
