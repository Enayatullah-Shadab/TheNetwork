<template>
  <header>
    <h1 class="bg-primary text-center">
      Welcome the Shadab Network
    </h1>
  </header>
  <main>
    <div class="row">
      <div class="col-3 text-center d-flex flex-column">
        <post :account="account" :post="post">
        </post>
      </div>
      <div class="col-9 text-center">
        <h3>NavBareCommponent</h3>
        <router-view />
      </div>
    </div>
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
