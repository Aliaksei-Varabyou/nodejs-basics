/*
* implement function that reads data from process.stdin,
* reverses text using Transform Stream and then writes it into process.stdout
*/
import { Transform } from 'stream';

const transform = async () => {

  const reverseStream = new Transform({
    transform(chunk, _, callback) {
      this.push(chunk.toString().split('').reverse().join('') + '\n');
      callback();
    }
  })
  
  console.log('!!!Press CTRL+D to exit!!!');
  process.stdin.pipe(reverseStream).pipe(process.stdout);
};

await transform();
