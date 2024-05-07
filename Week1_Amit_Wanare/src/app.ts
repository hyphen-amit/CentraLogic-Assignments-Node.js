import express, {Request, Response} from 'express';
import { splitString, concatString, checkYear, secretHandshake } from './logic';

const app=express();
const port=8000;

app.get('/split/:inputString',(req:Request,res:Response)=>{
    const str:any=req.params.inputString;
    const revisedString=splitString(str);
    res.json({revisedString});
})

app.get('/concat/:inputString1/:inputString2',(req:Request,res:Response)=>{
    const str1:any=req.params.inputString1;
    const str2:any=req.params.inputString2;
    const revisedString=concatString(str1,str2);
    res.json({revisedString});
})

app.get('/isLeapYear/:year',(req:Request,res:Response)=>{
    const year:number=parseInt(req.params.year);
    const isLeapYear=checkYear(year);
    res.json({year, isLeapYear});
})

app.get('/secretHandshake/:secret',(req:Request,res:Response)=>{
    const num:number=parseInt(req.params.secret);
    if (num<1 || num>31) {
        res.status(400).json({ error: 'Secret Number must be in range of 1 and 31' });
        return;
    }
    const answer:string[]=secretHandshake(num);
    res.json({answer})
})

app.listen(port,()=>{
    console.log("From the Typescript");
})