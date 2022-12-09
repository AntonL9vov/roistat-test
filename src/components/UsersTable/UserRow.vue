<template>
  <template v-for="user in users" :key="user.id">
    <tr>
      <td>
        {{ `${ child }  ${ user.name }` }}
      </td>
      <td>
        {{ user.phone }}
      </td>
    </tr>

    <user-row v-if="user.sub?.length !== 0"
             :users="user.sub"
             :child="child + '+'"/>
  </template>
</template>

<script>
export default {
  name: "UserRow",
  props: {
    users: Array,
    child: {
      required: false,
      default: ''
    },
  },
}
</script>

<style scoped>
table,
td {
  border-spacing: 0;
  padding: 10px;
  border: 1px solid #333;
}
</style>