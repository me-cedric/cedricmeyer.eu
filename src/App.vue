<template>
  <v-app>
    <v-app-bar
      app
      elevate-on-scroll
      color="secondary">
      <v-toolbar-title class="headline text-uppercase">
        <span>CÉDRIC MEYER</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
h1, h2, h3, h4, h5, h6 {
  font-weight: 400;
  line-height: 1.3;
}
.large {
  font-size: 4rem!important;
}
h3 {
  letter-spacing: 5px;
  text-transform: uppercase;
  margin: 1.94666667rem 0 1.168rem 0;
}
h4 {
  font-size: 2.28rem;
  line-height: 110%;
  margin: 1.52rem 0 0.912rem 0;
}
p {
  line-height: 2rem;
}
.theme--dark.v-application {
  background: var(--v-secondary-base)!important;
  color: var(--v-textcolor-base)!important;
}
a {
  color: var(--v-primary-base);
}
.v-parallax__content {
  padding: 0!important;
}
</style>
