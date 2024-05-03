import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useMathStore = defineStore('Math', () => {
    const firstNamber = ref(0)
    //  a function
    const doubleMath = computed(() => firstNamber.value * 2)


    //  returning velue
    return { firstNamber, doubleMath }


})