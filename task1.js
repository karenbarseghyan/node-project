const fs = require('fs');

const homework = fs.createReadStream('Homeworks.txt').on('data',chunk =>{
    console.log(chunk.toString());
})

homework.emit('');




