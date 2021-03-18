<template>
    <button @click="execute" :disabled="isEnabled">
        <slot>Default Button</slot>
    </button>
</template>

<script>
    import BaseLogic from "../modules/logic/BaseLogic";
    import props from "../modules/common/props";
    import {computed} from "vue";

    export default {
        name: "GButton",
        props,
        setup(props) {
            const logic = BaseLogic.createLogic(props.itemID)
            const isEnabled = computed(() => logic.getEnableStatus())

            function execute() {
                this.logic.execute()
            }

            return {
                isEnabled,
                logic,
                execute
            }
        }
    }
</script>

<style scoped>

</style>
