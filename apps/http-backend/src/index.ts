import express, { Request, Response } from 'express';
import SignUpPayload from './Schema/SignUpSchema';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { prisma } from 'database';
import SignInPayload from './Schema/SignInSchema';
import { SECRET } from './config';

const app = express();


app.use(express.json());


app.post('/api/v1/signup', async (req:Request, res:Response) => { 

    const {name,email,password} =  SignUpPayload.parse(req.body)
  

    if(!name || !email || !password){
        res.status(400).json({error:'All fields are required'})
    }

    const existingUser = await prisma.user.findUnique({
      where:{
        email
      }
    })

    if(existingUser){
      res.status(400).json({error:'User already exists'})
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({
      data:{
        name,
        email,
        password:hashedPassword,
      }
    })


    res.status(201).json({
      message:'User created successfully',
      user,
    })


})  



app.post('/api/v1/login', async (req:Request, res:Response) => {
  const {email,password} = SignInPayload.parse(req.body)

  if(!email || !password){
    res.status(400).json({error:'All fields are required'})
  }

  const user = await prisma.user.findUnique({
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
    id:user?.id,
    email:user?.email,
  },SECRET,{
    expiresIn:"1d"
  })


  res.status(200).cookie('token',token).json({
    message:'Login successful',
  })


})





app.listen(3000, () => {
  console.log('HTTP server is running on port 3000');
});


