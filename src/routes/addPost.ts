import {Router, Response} from "express"

const router: Router = Router()

router.get('/', function (req, res) {
    res.send('hello add post')
  })
  

export default router;