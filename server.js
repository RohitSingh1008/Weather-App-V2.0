var http = require ("http");

var server = http.createServer(function(req, res){
    res.writeHead(200, { "content-type" : "text/html"});

    //write here code
    res.write('Hello Node JS');
    res.end ('The Start')

});

server.listen(5000);