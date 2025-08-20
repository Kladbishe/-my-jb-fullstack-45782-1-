import Logger from "./logger";
export default class AlertLogger extends Logger {
    log(message) {
        alert(message);
    }
}
