<script setup lang="ts">
import { onMounted, ref, type Ref } from "vue"
import {linked,Mail, ScrollIntoView} from "../../models/link_to_other_dependancies"
import { imagesLoader } from "../../models/link_to_other_dependancies"
  class Linked {
    static github() {
        linked("https://github.com/wnomena")
    }
    static gmail() {
      Mail()
    }
    static linkedin() {
      linked("https://www.linkedin.com/in/sedraniaina-nomenjanahary-rakotoarimalala-a261b1361/")
    }
    static whatsapp() {
      linked("https://wa.me/261384840319")
    }
}
//Function for liading a lot images
const value_in_ref = ref("")
const virtual_dom = ref(null)
const value_to_insert = "Passionné par le codage, je peux effectuer d’innombrable application avec les technologies Javascript et Python, etc..."
const isLoading:Ref<0 | 1> = ref(0)
const image_path = ["../assets/vue-transparent-removebg-preview.png","../assets/nuxt-seeklogo.png","../assets/62a4bbf6fdee15d2905007bb.png","../assets/github-mark-white.png","../assets/gmail_new_logo_icon_159149.png","../assets/logo-linkedin-icon-4096.png","../assets/icone-de-telephone-recto.png"]
onMounted(() => {
  imagesLoader([...image_path],function(value:Boolean) {
      if(value) {
        isLoading.value = 1
      } else isLoading.value = 0
  })
  let i = 0
  const interval = setInterval(() => {
    if(i == value_to_insert.length - 1) clearInterval(interval)
    else {
      value_in_ref.value += value_to_insert[i]
      i += 1
    }
  }, 50); 
})
//Script for dynamic value-of-p
</script>
<template>
  <section ref="virtual_dom" v-if="isLoading" class="row">
    <div class="col-lg-12 container-some-information-like-na-bar">
      <div class="col-12 d-flex justify-content-end element-to-display-some-element-at-right-side-of-the-screen">
        <div class="col-7  container-to-put-gap-for-your-application d-flex">
          <div v-on:click="ScrollIntoView.home(virtual_dom)" class="col-3 d-flex flex-wrap justify-content-center link-for-home">
            <div class="home-div col-11">Acceuil</div>
          </div>
                    <div v-on:click="ScrollIntoView.about(virtual_dom)" class="col-3 d-flex flex-wrap justify-content-center link-for-about">
            <div class="home-div col-11">A propos</div>
          </div>
                    <div v-on:click="ScrollIntoView.project(virtual_dom)" class="col-3 d-flex flex-wrap justify-content-center link-for-all-projets">
            <div class="home-div col-11">Projets</div>
          </div>
                    <div v-on:click="ScrollIntoView.contact(virtual_dom)" class="col-3 d-flex flex-wrap justify-content-center link-for-contact">
            <div class="home-div col-11">Contact</div>
          </div>
        </div>
      </div>
      <h2 style="font-family: 'Inter',serif;" class="ms-5 mt-5 fw-bold text-light">Sedraniaina</h2>
      <div class="container-to-centering-something-at-screen col-12">
          <div ref="pointer-for-js" class="col-lg-5 col-md-7 col-11 ms-lg-5 ms-md-4 ms-2 element-to-contain-developper-personnal-information ">
              <div class="col-10 m-auto">
                <h3>Je suis</h3>
                <h4>Sedraniaina Nomenjanahary</h4>
                <h5 style="color: aqua;">Développeur Web</h5>
                <p class="dynamic-value-from-js">{{ value_in_ref }}</p>
                <div class="col-11 the-easy-way-to-put-some-child-to-inline d-flex gap-2">
                    <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000" style="cursor: pointer ;background: linear-gradient(90deg,#0C9ADC,#0C9ADC,#0D75AA,#0477AD); font-family: 'Inter';" v-on:click="ScrollIntoView.project(virtual_dom)" class="fw-bold btn-for-going-to-projects rounded p-2 col-lg-4 col-md-5 col-7 text-center">Mes Projets</div>
                    <div data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000" style=" cursor: pointer;background: linear-gradient(90deg,#033780,#0C9ADC,#0D75AA,#0477AD); font-family: 'Inter';" v-on:click="ScrollIntoView.contact(virtual_dom)" class="fw-bold btn-for-going-to-projects rounded p-2 col-lg-4 col-md-5 col-7 text-center">Me contacter</div>
                </div>
              </div>
          </div>
      </div>
    </div>
    <div class="col-10 m-auto html-element-for-more-explaination-about-developper-en-experiencies">
      <h3>A propos</h3>
      <p class="text-light">Aujourd’hui développeur Autodidacte, j’ai consacré la pupart de mon temps en tant que développeur Web, avec les technologies modernes comme Flask, Fast API, Node js, Vuejs, etc....  Pendant ces trois ans, j’ai acquis des compétences solides dans le développement informatique y compris d’autres domaines en dehors du développement web.  Etant un développeur d’interface graphique, je peux aussi travailler avec les outils de design comme Adobe XD ou Figma</p>
    </div>
    <div class="col-10 m-auto element-to-contain-list-of-finished-project">
       <h3>Mes projets</h3>
       <div class="col-lg-8 col-10 m-auto grid-container-to-manage-correctly-all-element-of-paroject-list d-flex flex-column gap-3">
          <div class="col-12 d-flex flex-wrap m-auto gap-3">
            <div data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000" class="border rounded col-lg-5 col-md-5 col-12 d-flex">
              <img class="col-5" src="../assets/vue-transparent-removebg-preview.png" alt="">
              <div style="height: fit-content;" class="col-7 gap-0 text-light align-self-center">
                <h4 style="margin: 0;" class="col-12 ">Mon Portfolio</h4>
                <p style="margin: 0;" class="">Vue.js</p>
              </div>
            </div>
            <div data-aos="fade-left" data-aos-delay="500" data-aos-duration="1000" class="border rounded  col-lg-5 col-md-5 col-12 d-flex">
              <img class="col-4 p-3" src="../assets/nuxt-seeklogo.png" alt="">
              <div style="height: fit-content;" class="col-7 gap-0 text-light align-self-center">
                <h4 style="margin: 0;" class="col-12 ">Personnel</h4>
                <p style="margin: 0;" class="">Nuxt.js | Node.js</p>  
              </div>
            </div>
          </div>
          <div class="col-12 d-flex flex-wrap m-auto gap-3">
            <div data-aos="fade-right" data-aos-delay="700" data-aos-duration="1000" class="border rounded  col-lg-5 col-md-5 col-12 d-flex">
              <img class="col-4 p-3" src="../assets/62a4bbf6fdee15d2905007bb.png" alt="">
              <div style="height: fit-content;" class="col-7 gap-0 text-light align-self-center">
                <h4 style="margin: 0;" class="col-12 ">Task Manager</h4>
                <p style="margin: 0;" class="">Flask | Jquery</p>
              </div>
            </div>
            <div data-aos="fade-left" data-aos-delay="900" data-aos-duration="1000" class="border rounded  col-lg-5 col-md-5 col-12 d-flex">
              <img class="col-4 p-3" src="../assets/62a4bbf6fdee15d2905007bb.png" alt="">
              <div style="height: fit-content;" class="col-7 gap-0 text-light align-self-center">
                <h4 style="margin: 0;" class="col-12 ">Full-Stack App</h4>
                <p style="margin: 0;" class="">Flask | Vue.js</p>
              </div>
            </div>
          </div>
       </div>
    </div>
    <div class="col-10 element-to-list-different-way-to-contact m-auto pb-5">
      <h3>Mes Contacts</h3>
      <div style="cursor: pointer;" class="col-12 d-flex justify-content-around element-to-contain-some-mode-of-contact gap-2">
        <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000" v-on:click="Linked.github()" style="height: 10vh;" class="col-3 border rounded d-flex justify-content-lg-start justify-content-md-start justify-content-center gap-1">
          <img class="p-2" src="../assets/github-mark-white.png" alt="">
          <h3 class="align-self-center d-lg-block d-md-block d-none">Github</h3>
        </div>
        <div data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000" v-on:click="Linked.gmail()" style="height: 10vh;" class="col-3 border rounded d-flex justify-content-lg-start justify-content-md-start justify-content-center gap-1">
          <img class="p-2" src="../assets/gmail_new_logo_icon_159149.png" alt="">
          <h3 class="align-self-center d-lg-block d-md-block d-none">Gmail</h3>
        </div>
        <div data-aos="fade-up" data-aos-delay="700" data-aos-duration="1000" v-on:click="Linked.linkedin()" style="height: 10vh;" class="col-3 border rounded d-flex justify-content-lg-start justify-content-md-start justify-content-center gap-1">
          <img class="p-2" src="../assets/logo-linkedin-icon-4096.png" alt="">
          <h3 class="align-self-center d-lg-block d-md-block d-none">Linkedin</h3>
        </div>
        <div data-aos="fade-up" data-aos-delay="900" data-aos-duration="1000" v-on:click="Linked.whatsapp()" style="height: 10vh;" class="col-3 border rounded d-flex justify-content-lg-start justify-content-md-start justify-content-center gap-1">
          <img class="p-2 rounded" src="../assets/icone-de-telephone-recto.png" alt="">
          <h3 class="align-self-center d-lg-block d-md-block d-none"> Whatsapp</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  /* Style global pour la page */
  h3 {
    font-weight: bold;
    color: white !important;
  }
  section.row .container-some-information-like-na-bar {
    background-image: url("../assets/Desktop.png");
    background-attachment: scroll;
    background-size: cover;
    height: 100vh;
  }
  section.row .container-some-information-like-na-bar .element-to-display-some-element-at-right-side-of-the-screen {
      padding-right: 5vw;
      color: white;
      font-weight: bold;
      font-family: "Inter",serif;
      cursor: pointer;
    }
  section.row .container-some-information-like-na-bar .element-to-display-some-element-at-right-side-of-the-screen .container-to-put-gap-for-your-application .col-3 .home-div::after {
    content: "";
    background-color: #fff;
    display: block;
    transform: translateY(100%);
    height: 3px;
    z-index: 3;
    width: 80%;
    transition: 0.1s;
    border-radius: 5px;
  }
    section.row .container-some-information-like-na-bar .element-to-display-some-element-at-right-side-of-the-screen .container-to-put-gap-for-your-application .col-3:hover > .home-div::after {
          width: 10%;
          transition: 0.2s;
          background-color: #00CCFF;
    }
    section.row .container-some-information-like-na-bar .container-to-centering-something-at-screen {
      height: 60vh;
      align-content: center;
      padding-left: 5px;
    }
        section.row .container-some-information-like-na-bar .container-to-centering-something-at-screen .element-to-contain-developper-personnal-information {
          color: #fff;
    }
    .row .html-element-for-more-explaination-about-developper-en-experiencies {
      display: block;
      padding-bottom: 30vh;
    }
    .row .element-to-contain-list-of-finished-project {
      padding-bottom: 30vh;
    }
    /* Pour telephone */
    @media only screen and (max-width: 600px) {
      section.row .container-some-information-like-na-bar .element-to-display-some-element-at-right-side-of-the-screen .container-to-put-gap-for-your-application {
        visibility: hidden;
      }
      section.row .container-some-information-like-na-bar {
        background-image: url();
        background-attachment: scroll;
        background-size: cover;
        height: 100vh;
  }
    }
</style>
