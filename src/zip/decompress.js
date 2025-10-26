/*
* implement function that decompresses archive.gz back to the fileToCompress.txt
* with same content as before compression using zlib and Streams API
*/
import { createReadStream, createWriteStream } from 'node:fs';
import { createGunzip } from 'node:zlib';
import { fileExists } from '../utils/fileExists.js';

const decompress = async () => {
  const filePath = './src/zip/files/fileToCompress.txt';
  const fileZip = './src/zip/files/archive.gz';
  if (!(await fileExists(fileZip))) {
    throw new Error('FS operation failed');
  }

  const readable = createReadStream(fileZip);
  const writable = createWriteStream(filePath, {encoding: 'utf-8'});
  const gunzip = createGunzip();
  
  writable.on('finish', () => {
    console.log('Operation completed');
  });

  readable.pipe(gunzip).pipe(writable);
};

await decompress();
