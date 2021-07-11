import { Request , Response ,NextFunction } from "express";
import verifySignature from "../helpers/ethereumFunctions";
import { verifyHolder } from "../helpers/unlockChecker";


export const errorHandler = (err, req,res,next )=>{
    if (typeof (err) === 'string') {
        // custom application error
        return res.status(400).json({ message: err });
    }

    if (err.name === 'UnauthorizedError') {
        // jwt authentication error
        return res.status(401).json({ message: 'Invalid Token' });
    }

    // default to 500 server error
    return res.status(500).json({ message: err.message });

}



export const checkEthSignatureMiddleware = (req : Request, res : Response, next : NextFunction) => {
    const data = req.body
        if (verifySignature(data)){
            next()
        } else {
            res.status(401).json({message :"wrong signature"})
        }

}

export const verifyActiveLock = (req : Request, res: Response, next : NextFunction) => {
    const data =req.body
    if(data.lock && data.address){
        
        verifyHolder(data.lock, data.address,data.chain).then((result)=>{
            var keys = result[0].keys
            keys.forEach(key => {
                if(key.lock.address == data.lock){
                    var currentTimeInSeconds=Math.floor(Date.now()/1000);
                    var diff = key.expiration - currentTimeInSeconds
                    if(diff > 0){
                        next()
                    } else {
                        res.status(401).json({message: "Unlock Key expired"})
                    }
                }
            });
            res.status(401).json({message: "Cannot find key on chain"})
        })
    } else {
        res.status(400).json({message : "missing lock address"})
    }
}