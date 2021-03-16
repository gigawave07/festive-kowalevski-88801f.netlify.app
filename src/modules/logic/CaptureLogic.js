import countTimer from "../../store/timer";

export default class CaptureLogic {

    constructor() {
        this.timer = countTimer
    }

    execute() {
        this.captureTimer()
    }

    captureTimer() {
        this.timer.captures.push(this.timer.currentTimer)

    }

    getEnableStatus() {
        return !this.timer.isEnabled
    }
}
