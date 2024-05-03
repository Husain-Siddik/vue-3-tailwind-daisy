
import { defineStore } from 'pinia'
export const UsePhyStore = defineStore('Phy', {
    state: () => ({
        Phy: 0,
    }),
    actions: {
        // since we rely on `this`, we cannot use an arrow function
        increment() {
            this.Phy++
        },
        randomizeCounter() {
            this.Phy = Math.round(100 * Math.random())
        },
    },
})