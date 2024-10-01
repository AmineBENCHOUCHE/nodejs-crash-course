import os from 'os';
//userInfo()
console.log(os.userInfo()); //
//totalmem()

const totalMemory = os.totalmem();
console.log(`Total Memory: ${(totalMemory / (1024 * 1024 * 1024)).toFixed(2)} GB`);

//freemem()

const freeMemory = os.freemem();
console.log(`Free Memory: ${(freeMemory / (1024 * 1024 * 1024)).toFixed(2)} GB`);

//cpus()

const cpus = os.cpus();
console.log(`Number of CPUs: ${cpus.length}`);
