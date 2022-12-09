import { defineStore } from 'pinia'

export const useUsersStore = defineStore('usersStore', {
    state: () => ({
        users: JSON.parse(localStorage.getItem('users')) ?? [],
    }),
    actions: {
        addUser(user) {
            this.users.push({id: this.users.length, ...user})
            localStorage.setItem('users', JSON.stringify(this.users))
        }
    }
})
