import { connect } from "mongoose";
//import dotenv from "dotenv"

export async function dbConnect() {
  await connect(process.env.MONGO_URI!)
    .then(() => console.log(`Database Connected`))
    .catch((error) => console.log(`Database Error: ${error}`));
}
