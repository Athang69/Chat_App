import { parse } from "dotenv";
import { WebSocketServer, WebSocket } from "ws";

const  wss = new WebSocketServer({port:8080})

interface User{
  socket:WebSocket,
  room:string
}

let userCount=0;
let allsockets:User[]=[];


wss.on("connection",(socket)=>{
  socket.on("message",(message)=>{
    const parsedMessage=JSON.parse(message as unknown as string);
    if(parsedMessage.type === "join"){
      allsockets.push({
        socket,
        room:parsedMessage.payload.roomId
      })
    }
    if(parsedMessage.type==="chat"){
      const currentUserRoom=allsockets.find((x)=>x.socket==socket)?.room
      for(let i=0; i<allsockets.length; i++){
        if(allsockets[i].room == currentUserRoom){
          allsockets[i].socket.send(parsedMessage.payload.message)
        }
      }
      
    }
  })
  
})


