const os = require('os');

const networkInterfaces = os.networkInterfaces();
let networkArray = networkInterfaces['Wi-Fi'];
console.log(networkArray[1].address);
