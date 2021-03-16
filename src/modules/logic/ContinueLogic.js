import StartLogic from "./StartLogic";
import countTimer from "../../store/timer";

export default class ContinueLogic {

    constructor() {
        this.timer = countTimer
        this.startLogic = new StartLogic()
    }

    execute() {
        this.continueTimer()
    }

    continueTimer() {
        this.timer.isEnabled = true
        this.timer.canContinue = false

        this.timer.currentTimer = Number.parseFloat(this.timer.currentTimer - 0.01).toFixed(2)
        this.timer.loop = setTimeout(this.startLogic.startTimer(), 10)
    }

    getEnableStatus() {
        return !this.timer.canContinue
    }
}
