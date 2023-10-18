import { connectDB } from "@/util/mongo";
import { ObjectId } from "mongodb";

type DataType = {
  title: string;
  content: string;
};

async function getData() {
  let client = await connectDB;
  const db = client.db("forum");
  let result = await db.collection("post").find().toArray();
  console.log(result);
  return result;
}

export default async function Home() {
  const Data = await getData();
  return (
    <main>
      <div>
        {Data.map((da, i) => {
          return (
            <div>
              <p>{da.title}</p>
              <p>{da.content}</p>
            </div>
          );
        })}
      </div>
    </main>
  );
}
