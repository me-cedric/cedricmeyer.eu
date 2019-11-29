<template>
  <div>
    <v-parallax
      height="400"
      src="@/assets/rocket.jpg"
    >
      <vue-particles
        color="#dedede"
        :particleOpacity="0.5"
        :particlesNumber="60"
        shapeType="circle"
        :particleSize="5"
        linesColor="#dddddd"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="6"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="repulse"
        style="height:100%;width:100%"
      ></vue-particles>
    </v-parallax>
    <v-container>
      <v-layout
        text-center
        wrap
      >
        <v-flex xs-12 mb-5>
          <h3><v-icon class="large">mdi-account-multiple</v-icon></h3>
          <h4>Présentation</h4>
          <p>
            J'ai 21 ans, je suis actuellement en quatrième année de Cycle Ingénieur à l'école d'Ingénieur <a href="https://ecole-ingenieurs.cesi.fr/">Cesi</a> en spécialité informatique de Strasbourg. J'y suis Assistant de Communication (AssCom). Passionné par l'informatique depuis plusieurs années, j'ai décidé d'en faire ma spécialité. Je m'intéresse par ailleurs aux sciences et à l'histoire. J'aime lire des livres dans le domaine de la science fiction et du fantastique. J'apprécie la musique rock et electro et ma série favorite est Doctor Who.
          </p>
        </v-flex>
      </v-layout>
    </v-container>
    <v-parallax
      height="400"
      src="@/assets/planets.jpg"
    >
    </v-parallax>
    <v-container>
      <v-layout
        text-center
        wrap
      >
        <v-flex xs-12 mb-5>
          <h3><v-icon class="large">mdi-book-open-variant</v-icon></h3>
          <h4>Compétences</h4>
          <v-col cols="12" md="8" lg="6" offset-md="2" offset-lg="3">
            <v-list
              rounded
              class="skill-list"
              v-for="(skillGroup, i) in skillGroups"
              :key="i"
            >
              <v-subheader>{{ i }}</v-subheader>
              <v-list-item
                two-line
                v-for="(skillSet, index) in skillGroup"
                :key="index"
              >
                <v-list-item-content>
                  <v-list-item-title>{{ index }}</v-list-item-title>
                  <v-list-item-subtitle>
                    <template v-for="(skillKey, indexSkill) in Object.keys(skillSet)">
                      <span :key="indexSkill">{{ skillSet[skillKey] }}</span>
                      <template v-if="indexSkill !== skillSet.length - 1">, </template>
                    </template>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'HomeComponent',
  data: () => ({
    skillGroups: {
      it: {
        web: [
          'VueJs',
          'Angular',
          'Laravel',
          'Ionic',
          'PHP7',
          'HTML5',
          'CSS3',
          'ES9',
          'jQuery',
          'Typescript'
        ],
        programmation: [
          'C',
          'C++',
          'C#',
          'Java',
          'Bash'
        ],
        system: [
          'Linux',
          'Windows'
        ],
        database: [
          'SQL',
          'MySQL',
          'PhpMyAdmin',
          'SQL Server'
        ],
        software: [
          'VsCode',
          'Jetbrains IDEs',
          'Photoshop',
          'VisualStudio'
        ]
      },
      language: {
        french: ['mothertongue'],
        english: ['englishLevel'],
        german: ['germanLevel']
      }
    }
  })
}
</script>

<style>
.v-list.skill-list {
  text-align: justify;
  background: transparent;
}
</style>
