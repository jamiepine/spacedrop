import { isClientOnline } from "~/ping";

export async function initUpload (payload: {
  fileSize: number;
  originClient: string;
  targetClient: string;
}) {
  console.log(payload);
  console.log(await isClientOnline(payload.originClient));
}