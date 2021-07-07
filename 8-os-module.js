//gives access to the methods and properties of this operating system build-in module
const os = require('os')

//info about the current user
const user = os.userInfo();
console.log(user);

//method returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOs= {
    name : os.type(), 
    release : os.release(), 
    totalMem:os.totalmem(), 
    freeMem: os.freemem()
}
console.log(currentOs);