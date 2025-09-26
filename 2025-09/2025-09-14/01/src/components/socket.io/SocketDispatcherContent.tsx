import { createContext } from "react"

interface SocketDispatcherContentInterface{
    clientId: string
}
const SocketDispatcherContext = createContext<SocketDispatcherContentInterface | null>(null)
export default SocketDispatcherContext