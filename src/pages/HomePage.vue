<template>
  <div class=" home d-flex flex-column text-center">
    <div class="bg-darg text-light p-2 m-2 ">
      <span>Here is my post</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
</style>
