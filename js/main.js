var fs = require("fs"),
http = require("http"),
request = require('request'),
url = require('url'),
marked = require('marked');


http.createServer(responseHandler).listen(process.env.PORT || 8888);
function responseHandler(req, res) {
 res.writeHead(200, {"Content-Type": "text/html"});
 if (req.url === "/") {
   fs.readFile('index.html', 'utf8', function(err, data){
     res.end(data);
   })
   res.end();
 } else if (req.url.match("/markdown/")) {
   var urlValue = "";
   urlValue = decodeURI(req.url.match(/markdown\/(.*)/)[1]);
   res.write( urlValue);
   console.log(marked(urlValue))
 }
 res.end();
}
