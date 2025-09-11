import { jwtDecode } from "jwt-decode"

import { useContext, useMemo } from "react"
import AuthContext from "../components/auth/auth/AuthContext"

export default function useUsername() {
    const authContext = useContext(AuthContext)

    const name = useMemo(() => {
       try {
    const { name } = jwtDecode<{ name: string }>(authContext!.jwt)
    return name
  } catch {
    return null
  }
    }, [authContext])

    return name

}