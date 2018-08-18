const http=require('http');
const fs=require('fs');

let port = 3000;


let server=http.createServer((req,res)=>{
  fs.readFile(__dirname+'/public/',((err,html)=>{
    res.writeHeader(200,{'Content-type':'text/html'});
    //res.write(html);
    res.end();
  }))
})



server.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
  console.log('Para derrubar o servidor: ctrl + c');
})
