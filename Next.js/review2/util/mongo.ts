import { MongoClient, MongoClientOptions } from "mongodb";
const url =
  "mongodb+srv://admin:admin12321@cluster0.ifpc1jw.mongodb.net/?retryWrites=true&w=majority";

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

export { connectDB };
