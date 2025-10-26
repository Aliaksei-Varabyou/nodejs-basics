import path from 'node:path';
import { release, version } from 'node:os';
import { createServer } from 'node:http';
import { readFile } from 'fs/promises';

import('./files/c.cjs');
const __filename = import.meta.filename;
const __dirname = import.meta.dirname;

const random = Math.random();
const jsonFile = random > 0.5 ? './files/a.json' : './files/b.json';
const jsonFilePath = path.resolve(__dirname, jsonFile);
const unknownObject = await readFile(jsonFilePath, {encoding: 'utf8'});

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServer((_, res) => {
  res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log('To terminate it, use Ctrl+C combination');
});

export {
  unknownObject,
  myServer,
};
