const http = require("http");
const config = require("./config");

http.createServer(function(request,response){

    response.end("Hello NodeJS!");

}).listen(config.port, config.host,function(){
    console.log("Server started accepting requests");
});