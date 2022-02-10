import express, {Request, Response} from 'express'
const app = express()



app.post('/addurl', function (req: Request, res: Response) {
    console.log(req.body)
  })


app.listen(5000, () =>{
    console.log("Backend running 5000 port")
}) 