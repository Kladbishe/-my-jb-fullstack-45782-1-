import Logger from "./logger";
export default class AlertLogger extends Logger {
    message(message) {
        alert(message);
    }
}
