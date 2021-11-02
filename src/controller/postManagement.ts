import { Request, Response, NextFunction } from "express"
import { Post } from "../models/posts";


// export const addPostController = (req : Request, res: Response) => {
//     var data = req.body
//     if(!!data){
//         const {identifier, unlockLocks, unlockKey } = data
//         Post.create({identifier, unlockLocks, unlockKey})
//         res.json({message :"success"})
//     }
// }

export const addPostController = (req : Request, res: Response) => {
    var data = req.body
    if(!!data){
        const {identifier, unlockLocks, unlockKey } = data
        Post.create({identifier, unlockLocks, unlockKey}).then((resp) => {
        res.json({message :resp})
        }).catch((error) => {
            res.status(500).json(error)
        })
    }
}

export const requestPostController = (req : Request, res : Response) => {
    var data = req.body
    console.log(JSON.stringify(req.body))
    Post.findOne({identifier : data.identifier}).then((result)=>{
        if(result){
            var postData = {}
            res.json({post : result})
        } else {
            res.status(404).json({message : "post does not exist"})
        }
    })
}