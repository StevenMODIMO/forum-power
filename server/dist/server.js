"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = require("./lib/db");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.status(200).json({ message: "Hello" });
});
app.listen(process.env.PORT, () => {
    (0, db_1.dbConnect)();
    console.log(`http://localhost:${process.env.PORT}`);
});
//# sourceMappingURL=server.js.map