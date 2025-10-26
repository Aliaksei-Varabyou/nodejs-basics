/*
* implement function that creates number of worker threads (equal to the number of host machine logical CPU cores)
* from file worker.js and able to send data to those threads and to receive result of the computation from them.
* You should send incremental number starting from 10 to each worker.
* The results are array of objects with 2 properties:
* status - 'resolved' in case of successfully received value from worker or 'error' in case of error in worker
* data - value from worker in case of success or null in case of error in worker
*/
import os from 'node:os';
import { Worker } from 'node:worker_threads';

function runWorker(i) {
  return new Promise(resolve => {
    const worker = new Worker('./src/wt/worker.js', {
      workerData: {n: 10 + i}
    })
    worker.on('message', (data) => resolve({
      index: i,
      status: 'resolved',
      data
    }));
    worker.on('error', () => resolve({
      index: i,
      status: 'error',
      data: null      
    }));
    worker.on('exit', (code) => {
      if (code !== 0)
        resolve({
          index: i,
          status: 'error',
          data: null      
        })
    });
  });
}

const performCalculations = async () => {
  const numberCPUs = os.cpus().length;

  const promises = [];
  const results = [];
  for (let i = 0; i < numberCPUs; i++) {
    promises.push(runWorker(i));
  }

  const resultsArr = await Promise.all(promises);
  for (const {index, status, data} of resultsArr) {
    results[index] = { status, data };
  }

  console.log(results);
};

await performCalculations();
