import express,{Application, Request, Response} from 'express';
import { storeOrderIds } from './service';


const app=express();
app.use(express.json());

app.post('/orders',async(req:Request,res:Response)=>{
    try{
        const{items}=req.body;
        const filteredOrders:any[]=items.filter((order:any)=>{
            return order.OrderBlocks.some((block:any)=>{
                if (Array.isArray(block.lineno)){
                    return block.lineno.some((lineno:number)=>lineno%3===0);
                }else{
                    return block.lineno%3===0;
                }
            });
        });
        const orderIDs:string[]=filteredOrders.map((order:any)=>order.OrderID);
        await storeOrderIds(orderIDs);
        res.json({
            message:'Orders processed successfully!'
        });
    }catch(error){
        console.error('Error processing orders: ', error);
        res.status(500).json({error:'Internal Server Error'});
    }
});

app.listen(3000,()=> console.log("Server is onn!!"));