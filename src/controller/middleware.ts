import {Router, Response} from "express"

const router: Router = Router()

router.get('/', function (req, res, next) {
    // res.status(404)

    // Put server logic here

    next()
  })
  

export default router;

// const requireSomething = () =>  {
//     return (req, res, next) => {
//         res.status(404).send("server error here baby")
//         res.end("something")
//     }
// }


// export default requireSomething