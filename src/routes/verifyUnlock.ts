import { verifyActiveLock,unlockFetchLocksController } from "../controller/unlockProtocol"
import { checkEthSignature } from "../controller/middleware"
import {Router, Response} from "express"

const router: Router = Router()
router.use(checkEthSignature)

router.get('/', function (req, res) {
  res.send('check /fetch')
})


router.get('/fetch', unlockFetchLocksController)
// router.get('/list', listLocksFromUser)

export default router;