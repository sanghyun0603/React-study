import { MongoClient, MongoClientOptions } from "mongodb";
//mongo
const url =

const options: MongoClientOptions = {
  useNewUrlParser: true,
} as MongoClientOptions;
let connectDB: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  let globalWithMongo = global as typeof globalThis & {
    _mongo: Promise<MongoClient>;
  };
  if (!globalWithMongo._mongo) {
    globalWithMongo._mongo = new MongoClient(url, options).connect();
  }
  connectDB = globalWithMongo._mongo;
} else {
  connectDB = new MongoClient(url, options).connect();
}

export {connectDB}