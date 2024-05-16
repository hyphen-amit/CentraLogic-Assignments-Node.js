"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeOrderIds = void 0;
const pgConfig_1 = __importDefault(require("./pgConfig"));
const storeOrderIds = async (orderIDs) => {
    try {
        await Promise.all(orderIDs.map(async (orderID) => {
            await pgConfig_1.default.query(`INSERT INTO orders (orderID) VALUES (20)`);
        }));
        console.log('Order IDs stored in th database successfully!');
    }
    catch (error) {
        console.error('Error storing order IDs: ', error);
        throw error;
    }
};
exports.storeOrderIds = storeOrderIds;
//# sourceMappingURL=service.js.map