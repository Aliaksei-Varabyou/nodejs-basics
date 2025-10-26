/*
* implement function that prints content of the fileToRead.txt into console
* (if there's no file fileToRead.txt Error with message FS operation failed must be thrown)
*/
import { readFile } from 'fs/promises';
import { fileExists } from '../utils/fileExists.js';

const read = async () => {
  const filePath = './src/fs/files/fileToRead.txt';

  if (!(await fileExists(filePath))) {
    throw new Error('FS operation failed');
  }

  try {
    const contents = await readFile(filePath, { encoding: 'utf8' });
    console.log(contents);
  } catch (err) {
    throw new Error('FS operation failed');
  }

};

await read();
