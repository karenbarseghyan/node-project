const fs = require('fs');
const path = require('path');
const os = require('os');
const random = require('random');

const randomNumber = random.int(10**7, 10**8);
console.log(randomNumber);
const cpu = os.cpus();
console.log(cpu[0].speed);

const filePath = path.join(__dirname, `/${randomNumber}.txt`)
fs.writeFile(filePath, `${cpu[0].speed}`, err => {
    if (err) {
        throw err;
    }
    console.log("file created");
})