/*
* implement function that calculates SHA256 hash for file fileToCalculateHashFor.txt 
* and logs it into console as hex using Streams API
*/
import { createHash } from 'node:crypto';
import { createReadStream, createWriteStream } from 'node:fs';
import { fileExists } from '../utils/fileExists.js';

const calculateHash = async () => {

  const filePath = './src/hash/files/fileToCalculateHashFor.txt';
  if (!fileExists(filePath)) {
    throw new Error('FS operation failed');
  }
  const reader = createReadStream(filePath);
  const hash = createHash('sha256');
  
  reader.on('data', chunk => {
    hash.update(chunk);
  });
  reader.on('end', () => {
    console.log('SHA256:', hash.digest('hex'));
  });
  reader.on('error', (err) => {
    console.error('Error:', err);
  });
};

await calculateHash();
