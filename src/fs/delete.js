/*
* implement function that deletes file fileToRemove.txt 
* (if there's no file fileToRemove.txt Error with message FS operation failed must be thrown)
*/
import { unlink } from 'node:fs/promises';
import { fileExists } from '../utils/fileExists.js';


const remove = async () => {
  const path = './src/fs/files/fileToRemove.txt';
  if (!(await fileExists(path))) {
    throw new Error('FS operation failed');
  }

  try {
    await unlink(path);
    console.log(`successfully deleted ${path}`);
  } catch (error) {
    console.error('there was an error:', error.message);
    throw new Error('FS operation failed');
  }
  
};

await remove();
