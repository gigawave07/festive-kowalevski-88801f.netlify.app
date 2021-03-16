<template>
    <button @click="execute" :disabled="isEnabled">
        <slot>Default Button</slot>
    </button>
</template>

<script>
    import countTimer from "../store/timer";
    import BaseLogic from "../modules/logic/BaseLogic";
    import props from "../modules/common/props";
    import {computed} from "vue";

    export default {
        name: "GButton",
        props,
        setup(props) {
            const timer = countTimer
            const isEnabled = computed(() => logic.getEnableStatus())
            const logic = BaseLogic.createLogic(props.itemID)

            function execute() {
                this.logic.execute()
            }

            return {
                timer,
                isEnabled,
                logic,
                execute
            }
        }
    }
</script>

<style scoped>

</style>
