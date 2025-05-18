import express, { Request, Response } from 'express';
import SignUpPayload from './Schema/SignUpSchema';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { prisma } from 'database';

const app = express();


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




app.listen(3000, () => {
  console.log('HTTP server is running on port 3000');
});


