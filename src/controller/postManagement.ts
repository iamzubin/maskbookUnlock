import { Request, Response, NextFunction } from "express"
import { Post } from "../models/posts";


export const addPostController = (req : Request, res: Response) => {
    var data = req.body
    if(!!data.post){
        const {identifier, unlockLocks, unlockKey } = data.post
        const post = Post.build({identifier, unlockLocks, unlockKey})
        post.save()
        res.send("success")
    }
}

export const requestPostController = (req : Request, res : Response) => {
    var data = req.body
    Post.find({identifier : data.post.identifier}).then((result)=>{
        res.send(result)
    })
}