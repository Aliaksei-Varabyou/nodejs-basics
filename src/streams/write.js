/*
* implement function that writes process.stdin data into file fileToWrite.txt content using Writable Stream
*/
import { createWriteStream } from 'fs';

const write = async () => {
  const filePath = './src/streams/files/fileToWrite.txt';
  const writable = createWriteStream(filePath, { encoding: 'utf-8' });
  console.log('!!!Press CTRL+D to exit!!!');
  process.stdin.pipe(writable);
};

await write();
