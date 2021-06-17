import { listLocksFromUser,unlockFetchLocksController } from "../controller/unlockProtocol"
import {Router, Response} from "express"

const router: Router = Router()

router.get('/', function (req, res) {
  res.send('check /fetch')
})


router.get('/fetch', unlockFetchLocksController)
router.get('/list', listLocksFromUser)

export default router;