const fs = require('fs');

fs.writeFile(`input.txt`, `NodeJS is interesting!`, (err,data) => {
    if (err) {
        throw err;
    }
    console.log(" input file created");
})

fs.readFile(`./input.txt`, 'UTF-8', (err, data) => {
    if (err) {
        console.log(err);
    }
    let newestData;
    if (data.includes(" ")) {
        let newData = data.split(" ");
        console.log(newData);
        newestData = newData.join("-");
        console.log(newestData);
    }
    data = newestData;
    fs.writeFile(`write.txt`, `${data}`, (err,data) => {
        if (err) {
            throw err;
        }
        console.log("write file created");
    })
})