/*
* implement function that compresses file fileToCompress.txt to archive.gz using zlib and Streams API
*/
import { createReadStream, createWriteStream } from 'node:fs';
import { createGzip } from 'node:zlib';
import { fileExists } from '../utils/fileExists.js';

const compress = async () => {
  const filePath = './src/zip/files/fileToCompress.txt';
  const fileZip = './src/zip/files/archive.gz';
  if (!(await fileExists(filePath))) {
    throw new Error('FS operation failed');
  }
  const readable = createReadStream(filePath);
  const writable = createWriteStream(fileZip, {encoding: 'utf-8'});
  const gzip = createGzip();
  writable.on('finish', () => {
    console.log('Operation completed');
  });

  readable.pipe(gzip).pipe(writable);
};

await compress();
