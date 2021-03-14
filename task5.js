const fs = require('fs');
const os = require('os');

const data1 = fs.readFileSync(`./task1.js`, 'utf-8');
const data2 = fs.readFileSync(`./task2.js`, 'utf-8');
const data3 = fs.readFileSync(`./task3.js`, 'utf-8');
const data4 = fs.readFileSync(`./task4.js`, 'utf-8');
let data = data1 + data2 + data3 + data4;
const osPlatform = os.platform();
let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let name = `${osPlatform}_${hours}_${minutes}_${seconds}.txt`;
console.log(name);
console.log(osPlatform);
fs.writeFile(name, `${data}`, (err,data) => {
    if (err) {
        throw err;
    }
    console.log("file created");
})
