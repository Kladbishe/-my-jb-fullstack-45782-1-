import { Server } from "socket.io";
import config from 'config'

const server = new Server({
    cors:{
        origin: "*"
    }
})
server.on("connection", socket =>{
    console.log("client connected...")

    socket.onAny((eventName: string, payload: any)=>{
        console.log(`received event ${eventName} with payload:`, payload)
        socket.emit(eventName,payload)
    })

    socket.on("disconnect" ,()=>console.log("client disconnect"))
})

server.listen(config.get("port"))
console.log(`server starter on port ${config.get("port")}`)