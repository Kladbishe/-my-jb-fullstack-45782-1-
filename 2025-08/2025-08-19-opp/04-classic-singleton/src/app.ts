import AlertLogger from "./alert.js";
import ConsoleLogger from "./console.js";


const logger = AlertLogger.getInstance()
logger.message('hello world')