/*
* implement function that renames file wrongFilename.txt to properFilename with extension .md 
* (if there's no file wrongFilename.txt or properFilename.md already exists 
* Error with message FS operation failed must be thrown)
*/
import { rename as fsRename } from 'node:fs/promises';
import { fileExists } from '../utils/fileExists.js';

const rename = async () => {
  const oldName = './src/fs/files/wrongFilename.txt';
	const newName = './src/fs/files/properFilename.md';

  if (!( await fileExists(oldName)) || await fileExists(newName)) {
    throw new Error('FS operation failed');
  }

  try {
    await fsRename(oldName, newName);
    console.log('file successfully renamed'); 
  } catch {
    throw new Error('FS operation failed');
  }
  
};

await rename();
