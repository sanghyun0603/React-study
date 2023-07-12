import { results } from "../../../util/mongo";
import Link from "next/link";

type MessageType = {
  _id: string;
  title: string;
  content: string;
};
//D
export async function getServerSideProps() {
  const message = await results;
  const serializedMessages = JSON.parse(JSON.stringify(message));
  return {
    props: {
      message: serializedMessages,
    },
  };
}

export default function List({ message }: any) {
  return (
    <div>
      <Link href={"/write"}>글작성</Link>
      <div className="list-bg">
        {message.map((data: MessageType, i: number) => {
          return (
            <div className="list-item" key={i}>
              <div className="flex flex-row justify-between border-b-2">
                <Link href={`/detail/${data._id}`}>
                  <div className="ms-10 mt-2">글제목 : {data.title}</div>
                </Link>
                <div>
                  <Link href={`/update/${data._id}`}>
                    <div className="px-2 py-2 my-2 rounded-lg bg-green-300">
                      수정하기
                    </div>
                  </Link>
                  <div
                    className="px-2 py-2 my-2 rounded-lg bg-red-500"
                    onClick={() => {
                      fetch("/api/edit", { method: "POST", body: "안녕" }).then(
                        () => {
                          console.log("완료");
                        }
                      );
                    }}
                  >
                    삭제하기
                  </div>
                </div>
              </div>
              <Link href={`/detail/${data._id}`}>
                <div className="ms-10 mt-4">내용 : {data.content}</div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
