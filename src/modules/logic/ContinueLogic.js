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

        this.startLogic.startTimer()
    }

    getEnableStatus() {
        return !this.timer.canContinue
    }
}
