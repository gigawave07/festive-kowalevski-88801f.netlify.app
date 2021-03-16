<template>
    <button @click="execute" :disabled="logic.getEnableStatus()">
        <slot>Default Button</slot>
    </button>
</template>

<script>
    import countTimer from "../store/timer";
    import BaseLogic from "../logic/BaseLogic";
    import props from "../modules/common/props";

    export default {
        name: "GButton",
        props,
        setup(props) {
            const timer = countTimer

            const logic = BaseLogic.createLogic(props.itemID)

            function execute() {
                this.logic.execute()
            }

            return {
                timer,
                logic,
                execute
            }
        }
    }
</script>

<style scoped>

</style>
