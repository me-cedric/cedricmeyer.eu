<template>
  <div>
    <v-parallax
      height="400"
      src="@/assets/rocket.jpg"
    >
      <particles
        id="first"
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
      ></particles>
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
            J'ai {{ calculateAge(birth) }} ans, je suis Ingénieur diplômé de l'école d'Ingénieur <a href="https://ecole-ingenieurs.cesi.fr/">Cesi</a> en spécialité informatique de Strasbourg. Passionné par l'informatique depuis tout jeune, j'ai décidé d'en faire ma spécialité. Je m'intéresse par ailleurs aux sciences et à l'histoire. J'aime lire des livres dans le domaine de la science fiction et du fantastique. J'apprécie la musique rock et electro et ma série favorite est Doctor Who.
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
              dense
              rounded
              class="skill-list"
              v-for="(skillGroup, i) in skillGroups"
              :key="i"
            >
              <v-subheader>{{ skillGroupNames[i] }}</v-subheader>
              <v-list-item-group color="primary">
                <v-list-item
                  two-line
                  v-for="(skillSet, index) in skillGroup"
                  :key="index"
                >
                  <v-list-item-content>
                    <v-list-item-title>{{ skillGroupNames[index] }}</v-list-item-title>
                      <v-list-item-subtitle>
                        <template v-for="(skillKey, indexSkill) in Object.keys(skillSet)">
                          <span :key="indexSkill">{{ skillSet[skillKey] }}</span>
                        <template v-if="indexSkill !== skillSet.length - 1">, </template>
                      </template>
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-col>
        </v-flex>
      </v-layout>
    </v-container>
    <v-parallax
      height="400"
      src="@/assets/space.jpg"
    >
    </v-parallax>
    <v-container>
      <v-layout
        text-center
        wrap
      >
        <v-flex xs-12 mb-5>
          <h3><v-icon class="large">mdi-briefcase</v-icon></h3>
          <h4>Expériences professionnelles</h4>
          <p>
            En septembre et octobre 2016 j'ai effectué un stage de réparation, vente de matériel informatique et accueil client chez <a href="https://www.microstore-it.fr/">Microstore</a> pour me familiariser avec le côté matériel.
          </p>
          <p>
            J'ai réalisé un stage de 2 mois et demi, prolongé d'un mois de mai à juillet 2017 chez <a href="https://www.hdr.fr/">HDR Communications</a> afin de concevoir, préparer et développer une solution d'ERP correspondant aux besoins de l'entreprise.
          </p>
          <p>
            J'ai réalisé un stage de 4 mois au sein d'<a>SO Multiservices</a> où j'ai pu concevoir, préparer et développer un module RH pour une solution d'ERP correspondant aux besoins de l'entreprise.
          </p>
          <p>
            J'ai pu réaliser mon stage stage de 4ème année sur une durée de 5 mois en tant que développeur web fullstack chez <a href="https://www.d-tt.nl/">DTT</a> à Amsterdam, pour qui j'ai également pu travailler par la suite dans le cadre de mon activité d'autoentrepreneur.
          </p>
          <p>
            Enfin, j'ai réalisé mon projet de fin d'études chez <a href="https://www.cgi.com/">CGI</a> à Illkirch, où j'ai pu développer mes compétences web, mobiles hybrides et natives Android, ainsi que de réaliser un Chatbot complet avec des conversations complexes éditables facilement via un CMS.
          </p>
        </v-flex>
      </v-layout>
    </v-container>
    <v-parallax
      height="400"
      src="@/assets/rocket.jpg"
    >
      <particles
        id="second"
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
      ></particles>
    </v-parallax>
  </div>
</template>

<script>
import particles from './particles'
export default {
  name: 'HomeComponent',
  components: { particles },
  data: () => ({
    birth: new Date(1997, 8, 15),
    skillGroupNames: {
      it: 'Informatique',
      langage: 'Langues',
      web: 'Web',
      programmation: 'Programmation',
      system: 'Systèmes',
      database: 'Bases de donées',
      software: 'Logiciels',
      french: 'Français',
      english: 'Anglais'
    },
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
      langage: {
        french: ['Langue maternelle'],
        english: ['Parlé écrit couramment. TOEIC 980/990']
      }
    }
  }),
  methods: {
    calculateAge (birthday) {
      var ageDifMs = Date.now() - birthday.getTime()
      var ageDate = new Date(ageDifMs)
      return Math.abs(ageDate.getUTCFullYear() - 1970)
    }
  }
}
</script>

<style lang="scss">
.v-list.skill-list {
  background: transparent !important;
  .v-subheader {
    justify-content: center;
  }
}
</style>
