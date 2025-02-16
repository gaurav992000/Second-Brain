import express from "express" 
import jwt from "jsonwebtoken"
import mongoose from "mongoose"
import { UserModel } from "./DATABASE/userdb"
import { contentModel } from "./DATABASE/content"
import { jwt_secret } from "./config"
mongoose.connect("mongodb+srv://web_03:FRthIjOygqK2kDSg@cluster0.mhrgupg.mongodb.net/secondbrain")

import { UserMiddelware } from "./middleware"
import { LinkModel } from "./DATABASE/link"
import { random } from "./utils"
const app=express()
app.use(express.json())
// @ts-ignore
import cors from "cors"
import ts from "typescript"
import { NotesModel } from "./DATABASE/notescontent"

app.use(cors())

app.post("/api/v1/signup",async function(req,res){
const user=req.body.username
const password=req.body.password



try{
    await UserModel.create({
    username:user,
    password:password
});
res.status(200).json({
message:"signup"
})
}catch(e){
    res.status(411).json({
        message:"invalid input"
    })

}





})

app.post("/api/v1/signin",async function(req,res){
    const user=req.body.username;
    const password=req.body.password;

  
    try{ 
        const response=  await UserModel.findOne({
            username:user,
            password:password,
        })

        if(response){
        const token=jwt.sign({
            id:response._id.toString()
        },jwt_secret)

        res.status(200).json({
    token
})
    }else{
        res.status(500).json({
            message:"error"
        })
    }


} catch(e){
    res.status(500).json({
        message:"error while singing up"
    })

    }
   

})

app.post("/api/v1/content",UserMiddelware,async(req,res)=>{
    const link=req.body.link;
    const title=req.body.title;
await contentModel.create({
    
    link:link,
    title:title,
    type:req.body.type,
    //@ts-ignore

    userId:req.userId,
    tags:[]
})
res.json({
    message:"Content added"
})

   
})

app.get("/api/v1/brain/content",UserMiddelware, async (req,res)=>{
    // @ts-ignore
    const UserID=req.userId;
    const content=await contentModel.find({
        userId:UserID
    }).populate("userId","username")
    res.json({
        content
    })


})



app.post("/api/v1/brain/notes",UserMiddelware,async(req,res)=>{
    const notes=req.body.notes
     //@ts-ignore
    const userId:req.userId
    await NotesModel.create({
        notes:notes,
        
        userId:userId
    })
    res.json({
        message:"notes added"
    })

})

app.get("/api/v1/brain/note",UserMiddelware,async(req,res)=>{
    //@ts-ignore
    const userId:req.userId
    const response=await NotesModel.find({
        userId:userId
    }).populate("userId","username")
    res.json({response})

})



app.post("/api/v1/brain/share",UserMiddelware,async(req,res)=>{
    const share=req.body.share;
    if(share){
        const existingLink=await LinkModel.findOne({
            //@ts-ignore
            userId:req.userId
        })
        if(existingLink){
            res.json({
                hash:existingLink.hash
            })
            return;
        }
        const hash=random(10)
        await LinkModel.create({
            // @ts-ignore
            userId:req.userId,
           
            hash:hash
        })
        res.json({
            hash
        })
        
        }else{
            await LinkModel.deleteOne({
            //  @ts-ignore
                userId:req.userid
            })
            res.json({
                message:"Removed link"
            })

    }

})

app.get("/api/v1/brain/:shareLink",async (req,res)=>{
    const hash=req.params.shareLink;
    const link = await LinkModel.findOne({
        hash
    })
    if(!link){
        res.status(411).json({
            message:
            "sorry incorrect input"
       
        })
       return;//if i do not write then in async(req,res ) give error
    }
        const content=await contentModel.find({
            userId:link.userId  
        })
    

    const user=await UserModel.findOne({
        _id:link.userId
    })
    res.json({
        username:user?.username,
        contents:content
    })
    




})


app.listen(3000);


