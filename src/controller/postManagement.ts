import { Request, Response, NextFunction } from "express"
import { Post } from "../models/posts";


export const addPostController = (req : Request, res: Response) => {
    var data = req.body
    if(!!data.post){
        const {identifier, unlockLocks, unlockKey } = data.post
        const post = Post.build({identifier, unlockLocks, unlockKey})
        post.save()
        res.json({message :"success"})
    }
}

export const requestPostController = (req : Request, res : Response) => {
    var data = req.body
    Post.findOne({identifier : data.post.identifier}).then((result)=>{
        if(result){
            var postData = {}
            result.unlockLocks.forEach(element => {
                if(element == data.lock){
                    postData = result.toJSON
                }
            });
            res.json({post : postData})
        } else {
            res.status(404).json({message : "post does not exist"})
        }
    })
}