"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const service_1 = require("./service");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.post('/orders', async (req, res) => {
    try {
        const { items } = req.body;
        const filteredOrders = items.filter((order) => {
            return order.OrderBlocks.some((block) => {
                if (Array.isArray(block.lineno)) {
                    return block.lineno.some((lineno) => lineno % 3 === 0);
                }
                else {
                    return block.lineno % 3 === 0;
                }
            });
        });
        const orderIDs = filteredOrders.map((order) => order.OrderID);
        await (0, service_1.storeOrderIds)(orderIDs);
        res.json({
            message: 'Orders processed successfully!'
        });
    }
    catch (error) {
        console.error('Error processing orders: ', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
app.listen(3000, () => console.log("Server is onn!!"));
//# sourceMappingURL=app.js.map