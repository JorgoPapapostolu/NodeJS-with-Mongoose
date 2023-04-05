import mongoose, { ConnectOptions } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const { DB_CONNECTION_STRING } = process.env;

mongoose
  .connect(`${DB_CONNECTION_STRING}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions)
  .then(() => console.log("Connection successfull"))
  .catch((err) => console.log(err));

export default mongoose;
