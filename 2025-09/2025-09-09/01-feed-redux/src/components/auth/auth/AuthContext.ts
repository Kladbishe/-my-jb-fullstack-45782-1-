import { createContext } from "react"

interface AutoContextInterface{
    jwt: string
    newJwt(jwt: string): void 
}

 const AutoContext = createContext<AutoContextInterface | null>(null)
 export default AutoContext