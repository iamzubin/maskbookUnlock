import { Request , Response ,NextFunction, request } from "express";
import { verifyHolder, getLocks } from "../helpers/unlockChecker";


export const unlockFetchLocksController = (req : Request, res : Response, next : NextFunction) => {
    const data = req.body
    if (data.address){

        const address : string = data.address
        getLocks(address).then((result)=>
        res.json(result))

    } else {

        res.status(400).json({message : "missing data"})
    
    }
}