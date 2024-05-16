"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
let arr = [];
app.post("/createArray", (req, res) => {
    try {
        const { arr: array } = req.body;
        if (!Array.isArray(array)) {
            throw new Error('Array is not provided or is invalid.');
        }
        arr = array;
        res.send("Array Created Successfully!!");
    }
    catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});
app.get("/arr", (req, res) => {
    res.send(arr);
});
app.post('/api/array-functions', (req, res) => {
    const { functionType, value } = req.body;
    let result;
    switch (functionType) {
        case 'forEach':
            arr.forEach((element, index) => {
                console.log(`Element at index ${index}: ${element}`);
            });
            result = arr;
            break;
        case 'map':
            result = arr.map((element, index) => {
                console.log(`Mapping element at index ${index}: ${element}`);
                return element * 2;
            });
            break;
        case 'filter':
            result = arr.filter((element, index) => {
                console.log(`Filtering element at index ${index}: ${element}`);
                return element % 2 === 0;
            });
            break;
        case 'reduce':
            result = arr.reduce((accumulator, currentValue) => {
                console.log(`Accumulating values: ${accumulator} and ${currentValue}`);
                return accumulator + currentValue;
            }, 0);
            break;
        case 'lastIndexOf':
            result = arr.lastIndexOf(value);
            break;
        case 'push':
            if (!value) {
                return res.status(400).json({ error: 'Value is required for push operation.' });
            }
            arr.push(value);
            result = arr;
            break;
        case 'pop':
            result = arr.pop();
            break;
        case 'slice':
            result = arr.slice(value);
            break;
        case 'concat':
            if (!Array.isArray(value)) {
                return res.status(400).json({ error: 'Value should be an array for concat operation.' });
            }
            result = arr.concat(value);
            break;
        case 'findIndex':
            result = arr.findIndex((element) => element === value);
            break;
        case 'indexOf':
            result = arr.indexOf(value);
            break;
        default:
            return res.status(400).json({ error: 'Invalid functionType.' });
    }
    res.json({ result });
});
// app.post('/arr/arr-functions', (req:Request, res:Response) => {
//     const functionType= req.body.functionType;
//     let result;
//     switch (functionType) {
//       case 'forEach':
//         arr.forEach((element, index) => {
//           console.log(`Element at index ${index}: ${element}`);
//         });
//         result = arr;
//         break;
//       case 'map':
//         result = arr.map((element, index) => {
//           console.log(`Mapping element at index ${index}: ${element}`);
//           return element * 2; 
//         });
//         break;
//       case 'filter':
//         result = arr.filter((element, index) => {
//           console.log(`Filtering element at index ${index}: ${element}`);
//           return element % 2 === 0;
//         });
//         break;
//       case 'reduce':
//         result = arr.reduce((accumulator, currentValue) => {
//           console.log(`Accumulating values: ${accumulator} and ${currentValue}`);
//           return accumulator + currentValue; 
//         }, 0);
//         break;
//       default:
//         return res.status(400).json({ error: 'Invalid functionType.' });
//     }
//     res.json({ result });
//   });
// app.post('/arr/lastIndexOf/:element',(req,res)=>{
//     const element=parseInt(req.params.element);
//     let result=arr.lastIndexOf(element);
//     res.send('Last index '+ element+ "is " + result );
// })
app.listen(3000, () => {
    console.log("Server is onn!!");
});
//# sourceMappingURL=app.js.map