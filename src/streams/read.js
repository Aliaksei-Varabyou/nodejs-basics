/*
* implement function that reads file fileToRead.txt content using Readable Stream 
* and prints it's content into process.stdout
*/
import { createReadStream } from 'fs';
import { fileExists } from '../utils/fileExists.js';

const read = async () => {
  const filePath = './src/streams/files/fileToRead.txt';

  if (!(await fileExists(filePath))) {
    throw new Error('FS operation failed');
  }

  const readable = createReadStream(filePath, { encoding: 'utf-8' });
  readable.on('error', err => console.error('Stream error:', err));
  readable.on('close', () => console.log('\n'));

  readable.pipe(process.stdout);
};

await read();
