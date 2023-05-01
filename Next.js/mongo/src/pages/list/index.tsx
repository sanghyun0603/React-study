import { results } from "../../../util/mongo";
import Link from "next/link";

type MessageType = {
  _id: string;
  title: string;
  content: string;
};

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
              <Link href={`/detail/${data._id}`}>
                <h4>{data.title}</h4>
                <p>{data.content}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
