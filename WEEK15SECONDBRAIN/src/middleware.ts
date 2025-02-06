import express from "express"
import { NextFunction,Request,Response } from "express";
import jwt from "jsonwebtoken"
import{jwt_secret} from "./config"


 export function UserMiddelware(req:Request,res:Response,next:NextFunction){
    const token=req.headers["authorization"]
    const decoded=jwt.verify(token as string,jwt_secret)

    if(decoded){
        //@ts-ignore
        
        req.userId=decoded.id;
        next()
        
    }else{
        res.status(403).json({
            message:"you are not logged in"
        })
    }





}