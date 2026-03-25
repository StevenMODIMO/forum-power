"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnect = dbConnect;
const mongoose_1 = require("mongoose");
//import dotenv from "dotenv"
async function dbConnect() {
    await (0, mongoose_1.connect)(process.env.MONGO_URI)
        .then(() => console.log(`Database Connected`))
        .catch((error) => console.log(`Database Error: ${error}`));
}
//# sourceMappingURL=db.js.map