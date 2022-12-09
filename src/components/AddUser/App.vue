<template>
  <div class="add">
    <add-button @click="openModal">
      Добавить
    </add-button>

    <add-user-modal-form :is-open="isModalOpen" @close="closeModal"/>
  </div>
</template>

<script>
import AddButton from "@/components/UI/IButton";
import AddUserModalForm from "@/components/AddUser/AddUserModalForm";

export default {
  name: "AddUser",
  components: { AddUserModalForm, AddButton },
  data() {
    return{
      isModalOpen: false
    }
  },
  methods: {
    openModal() {
      this.isModalOpen = true
    },
    closeModal(){
      this.isModalOpen = false
    }
  },
}
</script>

<style scoped>
.add{
  margin-bottom: 10px;
}
</style>