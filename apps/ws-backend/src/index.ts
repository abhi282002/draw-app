import {WebSocketServer} from 'ws';
import { SECRET } from '@repo/common';
import jwt from 'jsonwebtoken';
const wss = new WebSocketServer({
  port: 8080,
});


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
    ws.send('Invalid token');
    return;
  }

  const userId = (decoded as {_id:string})._id;
  ws.send(`Hello user ${userId}`);
  
})

