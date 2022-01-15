import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

/**
 * @description holds database connection provider
 */

// connection uri
const uri: string = process.env.MONGO_DB_PATH as string; // "mongodb://mongo:27017";

// mongoose connection
let conn: mongoose.Connection | null = null;

/**
 * creates database connection
 * @returns mongodb connection
 */
export const getConnection = async (): Promise<mongoose.Connection> => {
  if (conn == null) {
    console.log("mongodb uri:", uri);
    conn = await mongoose.createConnection(uri, {
      bufferCommands: false,
      bufferMaxEntries: 0,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
  }
  return conn;
};
