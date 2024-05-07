"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const logic_1 = require("./logic");
const app = (0, express_1.default)();
const port = 8000;
app.get('/split/:inputString', (req, res) => {
    const str = req.params.inputString;
    const revisedString = (0, logic_1.splitString)(str);
    res.json({ revisedString });
});
app.get('/concat/:inputString1/:inputString2', (req, res) => {
    const str1 = req.params.inputString1;
    const str2 = req.params.inputString2;
    const revisedString = (0, logic_1.concatString)(str1, str2);
    res.json({ revisedString });
});
app.get('/isLeapYear/:year', (req, res) => {
    const year = parseInt(req.params.year);
    const isLeapYear = (0, logic_1.checkYear)(year);
    res.json({ year, isLeapYear });
});
app.get('/secretHandshake/:secret', (req, res) => {
    const num = parseInt(req.params.secret);
    if (num < 1 || num > 31) {
        res.status(400).json({ error: 'Secret Number must be in range of 1 and 31' });
        return;
    }
    const answer = (0, logic_1.secretHandshake)(num);
    res.json({ answer });
});
app.listen(port, () => {
    console.log("From the Typescript");
});
//# sourceMappingURL=app.js.map