
import express from 'express';
import http  from 'http';
import path from 'path';
import { Server } from "socket.io";


const app = express();   // created express server
const httpServer = http.createServer(app); // app in http server
const io = new Server(httpServer);
app.use(express.static(path.resolve("./public")));

httpServer.listen('9000', ()=>{
    console.log("Listening on port 9000");
})
// socket connections
io.on('connection' , socket => {
    // console.log('Socket Connection');
    socket.on('message' , value =>{
        // console.log(JSON.stringify(value));
        io.emit('message', value);
    })
});


app.get('/', (req,res) => {
    res.sendFile('/public/index.html')
})