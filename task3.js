const fs = require('fs');
const fsPromises = require('fs/promises');

const writeData = async () => {
    const response = await fsPromises.readFile("./input.txt", 'utf-8');
    let length = response.length;
    let firstPartLength = Math.round(length/2);
    let firstPart = response.slice(0,firstPartLength);
    console.log(firstPart);
    const response1 = await fsPromises.writeFile("./output1.txt", `${firstPart}`);
    let secondPart = response.slice(firstPartLength,length);
    console.log(secondPart);
    const response2 = await fsPromises.writeFile("./output2.txt", `${secondPart}`);
    console.log("file1 created");
    console.log("file2 created");
    return response;
}

writeData()
    .then(data => console.log(data))
    .catch(err => console.log(err.message));