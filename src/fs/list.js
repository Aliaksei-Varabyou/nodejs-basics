/*
* implement function that prints array of all filenames from files folder into console
* (if files folder doesn't exists Error with message FS operation failed must be thrown)
*/
import { readdir } from 'fs/promises';
import { fileExists } from '../utils/fileExists.js';

const list = async () => {
  const dirPath = './src/fs/files';

  if (!(await fileExists(dirPath))) {
    throw new Error('FS operation failed');
  }

  try {
    const files = await readdir(dirPath);
    for (const file of files) {
      console.log(file);
    }
  } catch (err) {
    throw new Error('FS operation failed');
  } 

};

await list();
