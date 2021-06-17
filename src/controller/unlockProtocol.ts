import { Request , Response ,NextFunction, request } from "express";
import { verifyHolder, getLocks } from "../helpers/unlockChecker";


export const unlockFetchLocksController = (req : Request, res : Response, next : NextFunction) => {
    const data = req.body
    if (data.address){

        const address : string = data.address
        getLocks(address).then((result)=>
        res.send(result))

    } else {

        res.send("missing data")
    
    }
}

export const listLocksFromUser = (req : Request, res: Response) => {
    const data =req.body
    if(data.lock && data.address){
        
        verifyHolder(data.lock, data.address).then((result)=>{
            if (result[0]){
                res.send(true)
            } else{
                res.send(false)
            }
        })
        
    } else {
        res.send("missing lock address")
    }
}