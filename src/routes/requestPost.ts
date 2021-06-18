import {Router, Response} from "express"

import { verifyActiveLock } from "../controller/unlockProtocol";
import { requestPostController } from "../controller/postManagement";


const router: Router = Router()


router.use(verifyActiveLock)


router.get('/', requestPostController)
  

export default router;