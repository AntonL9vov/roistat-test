<template>
  <table>
    <thead>
      <tr class="no-select">
        <td @click="changeSortFunction('sortByName')">Имя</td>
        <td @click="changeSortFunction('sortByPhone')">Телефон</td>
      </tr>
    </thead>

    <tbody>
      <user-row :users="deepSort(users)"/>
    </tbody>
  </table>
</template>

<script>
import { useUsersStore } from "@/store/usersStore";
import { mapState } from 'pinia'
import UserRow from "@/components/UsersTable/UserRow";
import { deepClone } from "@/utils/deepClone";

export default {
  name: 'UsersTable',
  components: { UserRow },
  methods: {
    deepSort (array) {
      const res = deepClone(array)

      res.sort(this.sortFunctions[`${this.chosenSort}`])

      res.forEach(user => {
        if (user.sub?.length !== 0){
          user.sub = this.deepSort(user.sub)
        }
      })

      return res
    },

    changeSortFunction(func) {
      if (this.chosenSort === func) {
        this.chosenSort = 'sortDefault'
        return;
      }

      this.chosenSort = func
    }
  },
  data() {
    return{
      sortFunctions: {
        sortByName: (x, y) => x.name > y.name ? 1 : -1,
        sortByPhone: (x, y) => Number(x.phone) > Number(y.phone) ? 1 : -1,
        sortDefault: (x, y) => Number(x.id) > Number(y.id) ? 1 : -1,
      },
      chosenSort: 'sortDefault'
    }
  },
  computed: {
    ...mapState(useUsersStore, {
      users: store => {
        const users = deepClone(store.users)

        users.reverse()

        users.forEach(user => user.sub = [])

        users.forEach(user => {
          if (user.chief !== -1) {
            users.find(u => u.id === user.chief).sub.push(user)
          }
        })

        return users.filter(user => user.chief === -1).reverse()
      }
    })
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

.no-select{
  user-select: none;
}
</style>