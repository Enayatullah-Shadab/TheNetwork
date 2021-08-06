<template>
  <header>
    <h1 class="bg-primary text-center">
      Welcome the Shadab Network
    </h1>
  </header>
  <main>
    <div class="row">
      <div class="col-3">
        <h2 class="ml-5 float-right">
          login
        </h2>
      </div>
      <div class="col-9 text-center">
        <div class="row">
          <div class="col-12 ">
            <h3>NavBareCommponent</h3>
          </div>
          <div class="col">
            <router-view />
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="row d-flex flex-colunm">
      <section>
        <div class="col-4">
          A
        </div>
      </section>
      <section>
        <div class="col-4">
          B
        </div>
        <div class="col-4">
          C
        </div>
      </section>
    </div> -->
  </main>
  <footer>
    <div class="bg-dark text-light text-center p-4">
      Made with 💖 by Shadab
    </div>
  </footer>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
export default {
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState)
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

</style>
