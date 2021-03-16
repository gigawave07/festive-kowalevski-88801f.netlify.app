import countTimer from "../../store/timer";

export default class StopLogic {

    constructor() {
        this.timer = countTimer
    }

    execute() {
        this.stopTimer()
    }

    stopTimer() {
        clearTimeout(this.timer.loop)
        this.timer.isEnabled = false
        this.timer.canContinue = true
    }

    getEnableStatus() {
        return !this.timer.isEnabled
    }
}
