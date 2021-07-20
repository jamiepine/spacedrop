type FileURI = string;
export type LocalFileStore = Record<FileURI, File>;

export interface File {
  fileSizeInBytes: number;
  fileName: string;
  filePreviewImageInBase64: string;
  mimeType: string;
}

export interface Transfer {
  id: string;
  // basic meta data
  fromClientId: string;
  toClientId: string;
  file: File;
  encrypted: boolean;
  // chunking mechanism
  chunkCount: number;
  chunkSizeInBytes: number;
  chunksTransferred: number;
  // status mechanism
  dateAccepted?: Date;
  dateDeclined?: Date;
  dateCompleted?: Date;
}

export async function analyseFileMetaData() {}

// This function should read the
export async function extractChunkBuffer(fromBytes: number, toBytes: number) {}

export async function encryptFile() {}

export async function decryptFile() {}
