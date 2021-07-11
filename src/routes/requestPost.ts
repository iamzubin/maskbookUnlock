import {Router, Response} from "express"
import { checkEthSignatureMiddleware } from "../controller/middleware"
import { verifyActiveLock } from "../controller/middleware";
import { requestPostController } from "../controller/postManagement";


const router: Router = Router()

// router.use(checkEthSignatureMiddleware)
// router.use(verifyActiveLock)


router.post('/', requestPostController)
  

export default router;