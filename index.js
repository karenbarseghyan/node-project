//fetch api

/*
fetch("./name.json").then((response)=> {
    console.log(response);
    return response.json();
}).then(data => {
    console.log(data);
}).catch((err)=>{
    console.log(err);
});*/

// async & await

const getData = async () => {
    const response = await fetch("./name.json")
    const data = await response.json();
    return data;
    // const response1 = await fetch("./name1.json")
    // const data1 = await response1.json();
    // console.log(data1);
};
console.log(1);
console.log(2);
getData()
    .then(data => console.log(data));
console.log(3);
console.log(4);