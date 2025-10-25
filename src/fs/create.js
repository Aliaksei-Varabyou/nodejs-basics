/*
* implement function that creates new file fresh.txt with content
* "I am fresh and young" inside of the files folder 
* (if file already exists Error with message FS operation failed must be thrown)
*/

import { writeFile } from 'node:fs/promises';
import { fileExists } from '../utils/fileExists.js';

const create = async () => {
  const text = 'I am fresh and young';
  const path = './src/fs/files/fresh.txt';

  if (await fileExists(path)) {
    throw new Error('FS operation failed');
  }

  try {
    await writeFile(path, text, {encoding: 'utf8'});
    console.log('File was created');
  } catch {
    throw new Error('FS operation failed');
  }

};

await create();
