import {hashPersonalMessage,fromRpcSig, ecrecover, ECDSASignature, publicToAddress, bufferToHex } from "ethereumjs-util"

/**
 * var sigs : {[key: string]: string} = {
 *   "address": "0x43d821addeeddaa949e438e7d97243d58c0d507b",
 *   "msg": "dinosaur",
 *   "sig": "0x3ae402cccd982bd368ca3b9fecd479bfc369727d424ffe3cf631ef563aaa34d815a3b7436875ae9ea4d61f3c58f780bffb121a76504c80d6d1cb739e6764641a1b",
 *   "version": "3",
 *   "signer": "MEW"
 *    }
 */

/**
 * Function to Verify if the given messege @param signedMessage.msg is signed by the address @param address
 * @param signedMessage Entry Containing msg, address and signature
 * @returns 
 */


function verifySignature (signedMessage : {[key: string]: string}) : boolean {
    if(signedMessage.address && signedMessage.msg && signedMessage.sig){

        var msgBuffer : Buffer = Buffer.from(signedMessage.msg)
        var msgHash : Buffer = hashPersonalMessage(msgBuffer)
        var signatureParams : ECDSASignature = fromRpcSig(signedMessage.sig)
        var publicKey : Buffer = ecrecover(
            msgHash,
            signatureParams.v,
            signatureParams.r,
            signatureParams.s
            );
            const addressBuffer : Buffer= publicToAddress(publicKey);
            const address : string = bufferToHex(addressBuffer);
            if (signedMessage.address == address){
                return true
            } else {
                return false
            }  
            
        } else {
            throw new Error("Missing Parameters for signature verification");
            
        }
}
        
export default verifySignature;