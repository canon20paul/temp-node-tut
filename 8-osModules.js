const os = require('os')
// Infor about current user
const user = os.userInfo()
console.log(user);
// system returns system uptime in seconds
console.log(`The systems Uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem()
}
console.log(currentOS);