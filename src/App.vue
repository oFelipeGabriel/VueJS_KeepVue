<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        
        text
      >
        <span class="mr-2">Keep-Vue</span>
        <v-icon>mdi-vuetify</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content class="px-3">
      <ListaNotas/>
    </v-content>
  </v-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld';
import ListaNotas from './components/ListaNotas';

export default {
  name: 'App',

  components: {
    ListaNotas,
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
.px-3{
  padding: 0 .3rem;
}
</style>
