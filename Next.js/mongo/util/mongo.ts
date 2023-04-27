import { MongoClient, MongoClientOptions } from "mongodb";
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
const DbData = async () => {
  let client = await connectDB;
  const db = client.db("forum");
  let result = await db.collection("post").find().toArray();
  console.log(result);
  return result;
};

const results = DbData();

export { results };
