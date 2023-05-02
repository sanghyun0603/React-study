import { connectDB } from "../../../../util/mongo";
import { ObjectId } from "mongodb";

export async function getServerSideProps(context: any) {
  const { id } = context.query;
  let db = (await connectDB).db("forum");
  let result = await db.collection("post").findOne({ _id: new ObjectId(id) });
  const serializedMessages = JSON.parse(JSON.stringify(result));
  console.log(serializedMessages);
  return {
    props: {
      result: serializedMessages,
    },
  };
}

export default function Update({ result }: any) {
  return (
    <div>
      <div className="p-10">
        <div className="text-center text-lg text-blue-400">
          이곳은 업데이트 창이니라.
        </div>
        <div>
          <form action="/api/post/edit" method="POST">
            <label htmlFor="title">글제목써라</label>
            <input
              name="title"
              id="title"
              placeholder="글제목"
              defaultValue={result.title}
            />
            <label htmlFor="content">글내용써라</label>
            <input
              name="content"
              id="content"
              placeholder="글내용"
              defaultValue={result.content}
            />
            <input
              name="id"
              defaultValue={result._id}
              style={{ display: "none" }}
            />

            <button type="submit">글작성</button>
          </form>
        </div>
      </div>
    </div>
  );
}
