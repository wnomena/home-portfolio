<script setup lang="ts">
</script>

<template>
  <section class="row">
    <div class="col-lg-12 container-some-information-like-na-bar">
      <div class="col-12 d-flex justify-content-end element-to-display-some-element-at-right-side-of-the-screen">
        <div class="col-7 container-to-put-gap-for-your-application d-flex">
          <div class="col-3 d-flex flex-wrap justify-content-center link-for-home">
            <div class="home-div col-11">Acceuil</div>
          </div>
                    <div class="col-3 d-flex flex-wrap justify-content-center link-for-about">
            <div class="home-div col-11">A propos</div>
          </div>
                    <div class="col-3 d-flex flex-wrap justify-content-center link-for-all-projets">
            <div class="home-div col-11">Mes projets</div>
          </div>
                    <div class="col-3 d-flex flex-wrap justify-content-center link-for-contact">
            <div class="home-div col-11">Contact</div>
          </div>
        </div>
      </div>
      <h2 style="font-family: 'Inter',serif;" class="ms-5 mt-5 fw-bold text-light">Sedraniaina</h2>
      <div class="container-to-centering-something-at-screen col-12">
          <div class="col-5 ms-5 element-to-contain-developper-personnal-information ">
              <div class="col-10 m-auto">
                <h3>Je suis</h3>
                <h4>Sedraniaina Nomenjanahary</h4>
                <h5 style="color: aqua;">Développeur Web</h5>
                <p>Passionné par le codage, je peux effectuer d’innombrable application avec les technologies Javascript et Python, etc...</p>
                <div class="col-11 the-easy-way-to-put-some-child-to-inline d-flex gap-2">
                    <div style="background: linear-gradient(90deg,#0C9ADC,#0C9ADC,#0D75AA,#0477AD); font-family: 'Inter';" class="fw-bold btn-for-going-to-projects rounded p-2 col-4 text-center">Mes Projets</div>
                    <div style="background: linear-gradient(90deg,#033780,#0C9ADC,#0D75AA,#0477AD); font-family: 'Inter';" class="fw-bold btn-for-going-to-projects rounded p-2 col-4 text-center">Me contacter</div>
                </div>
              </div>
          </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  section.row .container-some-information-like-na-bar {
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
</style>
