<template>
  <div class="container">
    <label v-if="label"> {{ label }} </label>
    <input
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        class="input"
    />
  </div>
</template>

<script>
export default {
  name: "IInput",
  props: ['modelValue', 'label'],
  emits: ['update:modelValue'],
}
</script>

<style scoped>
.container{
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
}

.input{
  width: 100%;
}
</style>