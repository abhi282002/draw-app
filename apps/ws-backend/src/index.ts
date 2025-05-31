import {WebSocket, WebSocketServer} from 'ws';
import { SECRET } from '@repo/common';
import jwt from 'jsonwebtoken';


const wss = new WebSocketServer({
  port: 8080,
});


wss.on('listening', () => {
  console.log('WebSocket server is listening on port 8080');
});

interface UserProps{
  ws:WebSocket;
  room:string[],
  userId:string,
}


const users:UserProps[] = [];


wss.on('connection',function connection(ws,request){

  const url = request.url;

  if(!url){
    ws.send('No URL provided');
    return;
  }


  const params = new URLSearchParams(url.split('?')[1]);
  const token = params.get('token') || '';
  if(!token){
    ws.send('No token provided');
    return;
  }

  const decoded = jwt.verify(token,SECRET);

  if(!decoded || typeof decoded !== 'object' || !('_id' in decoded)){
    ws.close();
  }

  const userId = (decoded as {_id:string})._id;


  if(userId == null){
    ws.close();
    return;
  }

  users.push({
    ws,
    room: [],
    userId,
  })



 ws.on('message',function message(data){
  const parsedData = JSON.parse(data as unknown as string);

  if(parsedData.type === "join_room"){

    const user  = users.find(user => user.ws === ws);

    user?.room.push(parsedData.room);
    

  }


  if(parsedData.type === "leave_room"){
    const user = users.find(user => user.ws === ws);

    if(!user){
      return;
    }

    user.room = user?.room.filter(room => room !== parsedData.room)
  }


  if(parsedData.type === 'chat'){
    const roomId = parsedData.room;
    const message = parsedData.message;

    users.forEach(user =>{
      if(user.room.includes(roomId)){
        user.ws.send(JSON.stringify({
          type:'chat',
          message:message,
          roomId,
        }))
      }
    })
  }



 })

  
  
})

