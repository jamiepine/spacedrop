import { HttpRequest, HttpResponse } from "uWebSockets.js";

export async function UploadRoute (res: HttpResponse, req: HttpRequest) {
  const id = req.getParameter(0);
  console.log(id);
  return res.end('punk');
}