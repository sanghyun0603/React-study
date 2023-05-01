import type { RequestData } from "next/dist/server/web/types";
import { connectDB } from "../../../../util/mongo";

export default async function handler(request: any, response: any) {
  if (request.method == "POST") {
    if (request.body.title == "" || request.body.content == "") {
      return response.status(500).json("제목이나 내용써라");
    }
    let client = await connectDB;
    const db = client.db("forum");
    await db.collection("post").insertOne(request.body);
    response.redirect(302, "/list");
  }
}
