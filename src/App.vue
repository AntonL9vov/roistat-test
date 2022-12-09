<template>
  <div>
    <add-app />
    <users-table />
  </div>
</template>

<script>
import AddApp from "@/components/AddUser/App"
import UsersTable from "@/components/UsersTable/App";

export default {
  name: 'App',
  components: {
    UsersTable,
    AddApp
  }
}
</script>

<style>

</style>
