import { useRouter } from "next/router";
import { connectDB } from "../../../../util/mongo";
import { ObjectId } from "mongodb";
import Link from "next/link";

export async function getServerSideProps(context: any) {
  const { id } = context.query;
  console.log(context);
  let db = (await connectDB).db("forum");
  let result = await db.collection("post").findOne({ _id: new ObjectId(id) });
  const serializedMessages = JSON.parse(JSON.stringify(result));

  return {
    props: {
      result: serializedMessages,
    },
  };
}

export default function Detail({ result }: any) {
  return (
    <div>
      <div className="ms-10">
        <Link href={`/list`}>목록으로</Link>
      </div>

      <div className="flex flex-col items-center h-screen w-screen">
        <div className="mt-32 mb-5">상세페이지</div>
        <div className="m-5">id : {result._id}</div>
        <div className="m-5">title : {result.title}</div>
        <div className="m-5">content : {result.content}</div>
      </div>
    </div>
  );
}
