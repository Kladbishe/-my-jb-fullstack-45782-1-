import { useContext } from "react"
import AuthContext from "../components/auth/auth/AuthContext"
import type AuthAware from "../services/auth-aware/AuthAware"
import SocketDispatcherContext from "../components/socket.io/SocketDispatcherContent"

export default function useService<T extends AuthAware>(Service: {new(jwt:string, clientId: string): T}): T{
    const authContext = useContext(AuthContext)
      const SocketDispatcherContent = useContext(SocketDispatcherContext)
      const service = new Service(authContext!.jwt, SocketDispatcherContent!.clientId)
    return service
}