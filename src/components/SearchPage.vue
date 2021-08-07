
<template>
  <form @submit.prevent="findPosts">
    <div class="d-flex w-100 align-items-center">
      <input type="text" class="form-control" placeholder="search for a post" v-model="state.query">
      <button type="submit"
              class="btn"
              :disabled="!state.query"
              :class="{
                'btn-primary': state.query,
                'btn-danger': !state.query
              }"
      >
        Search
      </button>
    </div>
  </form>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { postService } from '../services/PostService'
import { AppState } from '../AppState'
export default {
  setup() {
    const state = reactive({
      query: ''
    })
    return {
      state,
      test() {
      },
      findPosts() {
        AppState.currentPage = 1
        AppState.currentQuery = state.query
        postService.findPosts()
        state.query = ''
      }
    }
  }
}
</script>
