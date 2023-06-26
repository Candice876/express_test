import express, { NextFunction } from "express";
import { Request, Response } from "express"
import routes from "./routes";
import helmet from 'helmet'
const app = express()

app.use(express.json());
app.use(helmet());

app.listen(3000, () => {
    console.log("Application listening at http://localhost:3000");
});


/* app.get("/health", (req, res) => res.sendStatus(200));
app.get("/ab*cd", (req, res) => res.send("/ab*cd"));
app.get(/abc/, (req, res) => res.send("abc")); */


/* .route('/')
.get((req: Request, res: Response) => {
    return res.send ('You made a GET request')
})
.post((req: Request, res: Response) => {
    return res.send ('You made a POST request')
})
.put((req: Request, res: Response) => {
    return res.send ('You made a PUT request')
})
.delete((req: Request, res: Response) => {
    return res.send ('You made a DELETE request')
}) */


 app.get("/", (req: Request, res: Response) => {
    return res.json({
        success: true,
        name: 'TDoesTech'
    });
});

/*

app.post("/api/data", (req: Request, res: Response) => {
    console.log(req.body);

    return res.sendStatus(200);
});

app.all("/api/all", (req: Request, res: Response) => {
    return res.sendStatus(200);
}); */


/* app.get('/sever',(req:Request, res:Response)=>{
    res.status(200).json({
        message:'Running......'
    })
})

app.get('/test',(req:Request, res:Response)=>{
    res.status(200).json({
        message: 'test is working'
    })
}) 

app.listen(port)*/

