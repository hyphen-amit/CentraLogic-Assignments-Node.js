import pool from './pgConfig';

export const storeOrderIds=async(orderIDs:string[])=>{
    try{
        await Promise.all(orderIDs.map(async(orderID:string)=>{
            await pool.query(`INSERT INTO orders (orderID) VALUES ($1)`,[orderID]);
        }));
        console.log('Order IDs stored in th database successfully!');
    }catch(error){
        console.error('Error storing order IDs: ',error);
        throw error;
    }
};