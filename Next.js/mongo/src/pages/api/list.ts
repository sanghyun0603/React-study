import type { RequestData } from "next/dist/server/web/types";
import { MongoClient, MongoClientOptions } from "mongodb";

const url =
  "mongodb+srv://admin:qmffndk63@cluster0.ifpc1jw.mongodb.net/?retryWrites=true&w=majority";

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

export default async function handler(request: RequestData, response: any) {
  if (request.method == "GET") {
    console.log(123);
    let client = await connectDB;
    const db = client.db("forum");
    let result = await db.collection("post").find().toArray();
    response.status(200).json(result);
  }
}
