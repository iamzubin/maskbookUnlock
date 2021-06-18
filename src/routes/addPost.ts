import {Router, Response} from "express"
import { addPostController } from "../controller/postManagement";

const router: Router = Router()

router.post('/', addPostController)

  

export default router;