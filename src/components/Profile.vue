<template>
  <div class="profile">
    <img class="border-radius-50%" :src="account.picture" alt="myAccount profile">
    <h4>account.name</h4>
    <h4>account.github</h4>
    <h4>account.Lingkedln</h4>
    <h4>account.resume</h4>
  </div>
</template>
<script>

export default {
  props: {
    account: {
      type: Object,
      required: true
    }
  },
  setup() {

  }
}
</script>
