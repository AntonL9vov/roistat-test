<template>
  <div id="myModal" class="modal" :class="{'open': isOpen }" @click="$emit('close')">
    <div @click.stop class="modal-content">
      <div class="modal-content__top">
        Добавление пользователя
        <span class="close" @click="$emit('close')">&times;</span>
      </div>

      <i-input v-model="userName" label="Имя"/>

      <i-input v-model="userPhone" label="Телефон"/>

      <i-select v-model="userChief" :options="avaliableChiefs" label="Начальник"/>

      <i-button @click="addUser">
        Сохранить
      </i-button>
    </div>
  </div>
</template>

<script>
import IButton from "@/components/UI/IButton";
import IInput from "@/components/UI/IInput";
import { useUsersStore } from "@/store/usersStore";
import ISelect from "@/components/UI/ISelect";
import { mapState } from 'pinia'

export default {
  name: "AddUserModalForm",
  components: {
    ISelect,
    IInput,
    IButton,
  },
  data(){
    return{
      userName: '',
      userPhone: '',
      userChief: -1,
    }
  },
  computed: {
    ...mapState(useUsersStore, {
      avaliableChiefs: store => store.users?.map(({name, id, phone}) => {
        return { value: id, label: `${name}, ${phone}` }
      })
    })
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    resetData() {
      this.userName = ''
      this.userPhone = ''
      this.userChief = -1
    },

    addUser() {
      useUsersStore().addUser({ name: this.userName, phone: this.userPhone, chief: Number(this.userChief) })

      this.resetData()

      this.$emit('close')
    }
  },
  emits: ['close'],
}
</script>

<style scoped>
.modal {
  display: none;
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
}

.modal.open{
  display: block;
}

.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.modal-content__top{
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
</style>