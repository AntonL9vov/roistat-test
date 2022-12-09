<template>
  <button class="button">
    <slot/>
  </button>
</template>

<script>
export default {
  name: "IButton",
}
</script>

<style scoped>
.button{
  width: fit-content;
  padding: 5px;
}
</style>