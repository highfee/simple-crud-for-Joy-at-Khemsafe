import mongoose from "mongoose";

// const MONGODB_URI = "mongodb://127.0.0.1:27017/madameJoy";

const MONGODB_URI =
  "mongodb://highfee:highfee1402@ac-sui7v8k-shard-00-00.irz8ony.mongodb.net:27017,ac-sui7v8k-shard-00-01.irz8ony.mongodb.net:27017,ac-sui7v8k-shard-00-02.irz8ony.mongodb.net:27017/?ssl=true&replicaSet=atlas-yjkfbm-shard-0&authSource=admin&retryWrites=true&w=majority";

// const MONGODB_URI =
//   "mongodb+srv://highfee:highfee@cluster0.hnbolfk.mongodb.net/?retryWrites=true&w=majority";

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const dbConnect = async () => {
  await mongoose.connect(MONGODB_URI);
};
export default dbConnect;
