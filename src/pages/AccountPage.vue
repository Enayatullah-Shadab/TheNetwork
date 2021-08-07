<template>
  <div>
    <h2>{{ account.name }}</h2>
    <h2>{{ account.email }}</h2>
    <img :src="account.image" alt="">
  </div>
</template>
<script>
import { computed } from 'vue'
import { AppState } from '../AppState'

export default {
  name: 'Account',
  setup() {
    return {
      account: computed(() => AppState.account)
    }
  }
}
</script>
