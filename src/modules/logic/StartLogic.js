import ResetLogic from "./ResetLogic";
import countTimer from "../../store/timer";

export default class StartLogic {

    constructor() {
        this.timer = countTimer
        this.resetLogic = new ResetLogic()
    }

    execute() {
        this.startTimer()
    }

    startTimer() {

        const isFirstTime = !this.timer.isEnabled
        if (isFirstTime) {
            if (isNaN(this.timer.inputTimer) || this.timer.inputTimer <= 0 || this.timer.inputTimer > 60 * 5) {
                this.timer.currentTimer = 'Input must be smaller than 5 mins'
                this.timer.canContinue = false
                return
            }

            this.resetLogic.execute()
            this.timer.currentTimer = this.timer.inputTimer
            this.timer.isEnabled = true
        }

        let isFinish = this.timer.currentTimer <= 0;
        if (isFinish) {
            this.timer.isEnabled = false
            this.timer.canContinue = false
            return
        }

        this.timer.currentTimer = +(this.timer.currentTimer - 0.1).toFixed(1)
        this.timer.loop = setTimeout(() => this.startTimer(), 100)
    }

    getEnableStatus() {
        return this.timer.isEnabled
    }

}
