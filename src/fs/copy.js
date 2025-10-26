/*
* implement function that copies folder files files with all its content
* into folder files_copy at the same level 
* (if files folder doesn't exists or files_copy has already been created 
* Error with message FS operation failed must be thrown)
*/
import { cp } from 'node:fs/promises';
import { fileExists } from '../utils/fileExists.js';

const copy = async () => {
  const dirSrc = "./src/fs/files";
	const dirDest = "./src/fs/files_copy";

  if (!(await fileExists(dirSrc)) || await fileExists(dirDest)) {
    throw new Error('FS operation failed');
  }

  try {
    await cp(dirSrc, dirDest, {
      recursive: true,
      force: true
    });
    console.log('successfully copied directory');
  } catch {
    throw new Error('FS operation failed');
  }
};

await copy();
