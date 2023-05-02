import { connectDB } from "../../../../util/mongo";
import { ObjectId } from "mongodb";

export default async function Edit(request: any, response: any) {
  if (request.method == "POST") {
    if (request.body.title == "" || request.body.content == "") {
      return response.status(500).json("제목이나 내용써라");
    }
    console.log(request.body, "dddd");
    let client = await connectDB;
    const db = client.db("forum");
    await db
      .collection("post")
      .updateOne(
        { _id: new ObjectId(request.body.id) },
        { $set: { title: request.body.title, content: request.body.content } }
      );

    response.redirect(302, "/list");
  }
}
