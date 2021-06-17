import { Request , Response ,NextFunction } from "express";
import verifySignature from "../helpers/ethereumFunctions";

  
export const checkEthSignature = (req : Request, res : Response, next : NextFunction) => {
    const data = req.body
    try {
        if (verifySignature(data)){
            next()
        } else {
            res.send("wrong signature")
        }
    } catch (error) {
        console.log(error)
        res.send(" " + error)
    }
    // res.send(address)
}

