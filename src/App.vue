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
        rounded
        router-link="https://www.linkedin.com/in/cedric-meyer"
        target="_blank"
      >
        <v-icon left>mdi-linkedin</v-icon>
        <span class="mr-2">Linkedin</span>
      </v-btn>
      <!-- <router-link
        to="cv"
        v-slot="{ href, navigate, isActive }"
      >
        <v-btn
          text
          rounded
          :active="isActive"
          :href="href"
          @click="navigate"
        >
          <v-icon left>mdi-file-document</v-icon>
          <span class="mr-2">Curriculum Vitae</span>
        </v-btn>
      </router-link>
      <router-link
        to="contact"
        v-slot="{ href, navigate, isActive }"
      >
        <v-btn
          text
          rounded
          :active="isActive"
          :href="href"
          @click="navigate"
        >
          <v-icon left>mdi-forum</v-icon>
          <span class="mr-2">Contact</span>
        </v-btn>
      </router-link> -->
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>

    <v-footer
      :padless="true"
    >
      <v-card
        flat
        tile
        width="100%"
        color="secondary"
        class="text-center"
      >
        <v-card-text>
          <p class="material-links">
            <v-btn text rounded class="twitter-follow-button waves-effect waves-light btn personal-link" href="https://twitter.com/intent/follow?original_referer=http%3A%2F%2Fcedricmeyer.eu%2F&ref_src=twsrc%5Etfw&screen_name=me_cedric&tw_p=followbutton"><font-awesome-icon :icon="faTwitter" class="fa-icon" /> Follow @me_cedric</v-btn>
            <v-btn text rounded class="linkedin-follow-button waves-effect waves-light btn personal-link" href="https://www.linkedin.com/in/cedric-meyer"><font-awesome-icon :icon="faLinkedin" class="fa-icon" /> Linkedin</v-btn>
            <v-btn text rounded class="waves-effect waves-light btn personal-link" href="mailto:cedric.meyer@viacesi.fr"><font-awesome-icon :icon="faEnvelope" class="fa-icon" /> <span id="mail">cedric.meyer@viacesi.fr</span></v-btn>
            <v-btn text rounded href="tel:+33677226414" class="call-button waves-effect waves-light btn personal-link"><font-awesome-icon :icon="faWhatsapp" class="fa-icon" /> +33 6 77 22 64 14</v-btn>
          </p>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Cédric Meyer</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
// eslint-disable-next-line standard/object-curly-even-spacing
import { faTwitter, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default {
  name: 'App',
  data () {
    return {
      faTwitter,
      faLinkedin,
      faWhatsapp,
      faEnvelope
    }
  }
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
  text-decoration: none;
}
.v-parallax__content {
  padding: 0!important;
}

$front-blue: #0084ff;
$light-grey: #ddd;
$color_2: rgba(255, 255, 255, .9);
$dark-grey: rgb(133, 133, 133);
$color_3: #000;
$linkedin-blue: #005f91;
$twitter-blue: #1b95e0;
$call-green: #25d366;
$color_5: #4CAF50;
$color_6: #F44336;
$background_color_1: #394046;
$background_color_2: #282E34;
.personal-link {
  color: $front-blue !important;
  vertical-align: middle;
  line-height: 34px;
  margin-bottom: 5px;
  margin: 0 5px;
  &.btn {
    border-radius: 999px;
    background-color: transparent;
    box-shadow: none;
    text-transform: initial;
    border: 1px solid $front-blue;
    i {
      width: 24px;
      font-size: 14px;
      height: inherit;
      line-height: inherit;
    }
    &:hover,
    &:focus {
      border: 1px solid $color_2 !important;
      color: $color_2 !important;
      box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2) !important;
      background-color: $background_color_1 !important;

      &.twitter-follow-button {
        border: 1px solid $twitter-blue;
        background-color: $twitter-blue;
      }
      &.linkedin-follow-button {
        border: 1px solid $linkedin-blue;
        background-color: $linkedin-blue;
      }
      &.call-button {
        border: 1px solid $call-green;
        background-color: $call-green;
      }
    }
  }
}
.fa-icon {
  margin-right: 5px;
}
</style>
