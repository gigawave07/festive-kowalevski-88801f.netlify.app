import {reactive} from "@vue/reactivity";

const countTimer = reactive({
    inputTimer: 0,
    currentTimer: 0,
    loop: 0,
    isEnabled: false,
    captures: [],
    canContinue: false
})

export default countTimer
