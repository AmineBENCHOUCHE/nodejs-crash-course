console.log(process.argv)
const args = process.argv[2];

//process.env
console.log(process.env.USERNAME)

//pid
console.log(process.pid)

//cwd current workind directory
console.log(process.cwd())

// title
console.log(process.title)
process.title = 'My New Node.js App'

//memoryUsage
const memUsage = process.memoryUsage();
console.log(`Memory Usage: ${JSON.stringify(memUsage)}`);

//uptime
console.log(`Uptime: ${process.uptime()} seconds`);
process.on('exit', (code) => console.log(`About to exit with code: ${code}`));

//exit
process.exit(0); //SUCCESS
console.log(`Hello from  after exit`)