import { connectDB } from "../../util/mongo";

export default async function Home() {
  let client = await connectDB;
  const db = client.db("forum");
  let result = await db.collection("post").find().toArray();
  return (
    <main>
      <div>메인페이지입니다.</div>
      <div>{result[0].title}</div>
    </main>
  );
}
