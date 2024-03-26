import mongoose from "mongoose";
import crypto from "crypto";

const connection = {};

export const connectDB = async () => {
  try {
    if (connection.isConnected) {
      console.log("Using existing connection");
      return;
    }
    const db = await mongoose.connect(process.env.MONGODB_URI);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log("db error: " + error);
    throw new Error("Problem in connection!");
  }
};

export const hash = (str) => {
  const hash = crypto
    .createHmac("sha256", process.env.HASH_SECRET)
    .update(str)
    .digest("hex");

  return hash;
};
