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

export const verifyActiveLock = (req : Request, res: Response, next : NextFunction) => {
    const data =req.body
    if(data.lock && data.address){
        
        verifyHolder(data.lock, data.address).then((result)=>{
            var keys = result[0].keys
            keys.forEach(key => {
                if(key.lock.address == data.lock){
                    var currentTimeInSeconds=Math.floor(Date.now()/1000);
                    var diff = key.expiration - currentTimeInSeconds
                    if(diff > 0){
                        next()
                    } else {
                        res.send("Unlock Key expired")
                    }
                }
            });
        })
    } else {
        res.send("missing lock address")
    }
}