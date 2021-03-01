import express, { Application, Request, Response, NextFunction } from 'express';

const app: Application = express();

const add = (a: number, b: number): number => a + b;

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    const num: number = add(6, 6);
    res.send(num.toString());
})

app.listen(3000, () => console.log("Server is running at port 3000"));