<template>
  <div class="container">
    <label v-if="label"> {{ label }} </label>

    <select :value="modelValue" @click="$emit('update:modelValue', $event.target.value)" class="select">
      <option value="-1" disabled style="display: none"/>
      <option v-for="option of options" :key="option" :value="option.value">
        {{ option.label }}
      </option>
    </select>
  </div>

</template>

<script>
export default {
  name: "ISelect",
  props: {
    options: Array,
    modelValue: {},
    label: {
      required: false
    },
  },
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

.select{
  width: 100%;
}
</style>