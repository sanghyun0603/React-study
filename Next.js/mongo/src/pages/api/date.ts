import type { RequestData } from "next/dist/server/web/types";

export default function handler(request: RequestData, response: any) {
  let a = new Date();
  response.status(200).json(a);
}
