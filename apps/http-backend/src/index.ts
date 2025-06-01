import express,{ Request, Response } from 'express';
import { SECRET } from '@repo/common';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import cors from 'cors';
import { SignUpPayload,SignInPayload } from '@repo/common/schema';
import { prismaClient } from '@repo/db';
import { authMiddleware } from './middleware';
import RoomPayload from './Schema/RoomSchema';


const app = express();



app.use(cors({
  origin: 'http://localhost:3000', 
  credentials: true, 
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/api/v1/signup', async (req:Request, res:Response) => { 

    const {name,email,password} =  SignUpPayload.parse(req.body)

    if(!name || !email || !password){
        res.status(400).json({error:'All fields are required'})
    }

    

    const existingUser = await prismaClient.user.findUnique({
      where:{
        email
      }
    })

    if(existingUser){
      res.status(400).json({error:'User already exists'})
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await prismaClient.user.create({
      data:{
        name:name!,
        email,
        password:hashedPassword,
      }
    })


    res.status(201).json({
      message:'User created successfully',
    })


})  



app.post('/api/v1/login', async (req:Request, res:Response) => {
  const {email,password} = SignInPayload.parse(req.body)

  if(!email || !password){
    res.status(400).json({error:'All fields are required'})
  }

  const user = await prismaClient.user.findUnique({
    where:{
      email
    }
  })

  if(!user){
    res.status(400).json({error:'Invalid credentials'})
  }

  const isPasswordValid = await bcrypt.compare(password,user?.password || '');

  if(!isPasswordValid){
    res.status(400).json({error:'Invalid credentials'})
  }

  const token = jwt.sign({
    _id:user?.id,
    email:user?.email,
  },SECRET,{
    expiresIn:"1d"
  })


  res.status(200).cookie('token',token).json({
    message:'Login successful',
  })



})


app.post(
  '/api/v1/room',
  authMiddleware,
  async (req:Request,res:Response)=>{
    const userId = req.userId;

    console.log(userId)

    const {slug} = RoomPayload.parse(req.body)

    if(!userId){
      res.status(401).json({error:'Unauthorized'})
    }

    if(!slug){
      res.status(400).json({error:'Slug is required'})
    }

    const existingRoom = await prismaClient.room.findUnique({
      where:{
        slug
      }
    })
    
    if(existingRoom){
      res.status(400).json({error:'Room already exists'})
    }


    const room = await prismaClient.room.create({
      data:{
        adminId:userId!,
        slug,
      }
    })

    res.status(201).json({
      message:'Room created successfully',
      room,
    })
    
  }
)


app.get('/api/v1/chats/:roomId',async (req:Request,res:Response)=>{
  const roomId = Number(req.params.roomId)
  if(!roomId){
    res.status(400).json({error:'Room ID is required'})
  }

  const messages = await prismaClient.chat.findMany({
    where:{
      roomId
    },
    orderBy:{
      id:'desc'
    },
    take:50
  })


  res.status(200).json({
    messages,
  })




})


app.listen(3001, () => {
  console.log('HTTP server is running on port 3001');
});


