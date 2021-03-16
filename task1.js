const random = require('random');

const getNumber = () => {
    return new Promise((resolve, reject) => {
        const number = random.int(1,10);
        if(number < 5){
            resolve(number)
        }else{
            reject(number);
        }
    });
}

getNumber().then((data)=>{
    console.log(data);
}).catch (err=> {
    console.log(err);
})
