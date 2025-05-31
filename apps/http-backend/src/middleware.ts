import { NextFunction,Request,Response } from "express";
import { SECRET } from "@repo/common";
import jwt from "jsonwebtoken";
import DataStoredInToken from "./interfaces/dataStoredInToken";


export const  authMiddleware = (
  req: Request,res:Response,next:NextFunction) =>{
  const token = req.headers['authorization']?.split(' ')[1] || req.cookies

  if(!token){
    res.status(401).json({error:'Unauthorized'})
  }

  try {
    const verificationResponse = jwt.verify(token,SECRET) as DataStoredInToken;
    if(!verificationResponse._id){
       res.status(401).json({error:'Unauthorized'})
    }
    req.userId = verificationResponse._id;
    req.email = verificationResponse.email;
    next()
    
  } catch (error) {
     res.status(401).json({error:'Unauthorized'})
  }


  }
