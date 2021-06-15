import {Router, Response} from "express"

const router: Router = Router()

router.get('/', function (req, res) {
    res.send('hello verify')
  })
  

export default router;