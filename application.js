var fs=require("fs");
var path=require("path");
var http=require("http");
var server=http.createServer(function(req,res){
    res.writeHead(200,{"content-type":"text/html"});
    var method=req.method;
    var url=req.url;
    console.log("Method is "+method+" and URL is "+url);
    if(method==="GET"&&url==="/"){
        res.write("This is the Main Page !");
    }
    else{
        var newPath=path.join(__dirname,url);
        var content=fs.createReadStream(newPath);//this provides an alternative for the traditional read from 1 and writre in another.
        content.pipe(res);
    }
});
server.listen(1357,function(){
    console.log("Server is created ..");
});