import dist = require("socket.io");

const ioServer = new dist.Server({
    cors:{
        origin: "*"
    }
})

ioServer.listen(3004)