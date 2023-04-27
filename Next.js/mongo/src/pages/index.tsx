import { results } from "../../util/mongo";

type MessageType = {
  _id: string;
  title: string;
  content: string;
};

export async function getServerSideProps() {
  const message = await results;
  const serializedMessages = JSON.parse(JSON.stringify(message));
  console.log(serializedMessages);
  return {
    props: {
      message: serializedMessages,
    },
  };
}

export default function Home({ message }: any) {
  return (
    <main>
      <div>{message[1].title}</div>
      <div>하이</div>
    </main>
  );
}
