import express from 'express';
import os from 'os';
import fs from 'fs';
import events from 'events';
import http from 'http'; 

const app = express();


//filesystem module
const files = fs.readdirSync('./');
console.log(files);

const newfile = fs.readdir('./',function(error , files){
  if(error)
  console.log('error is :' + error);
  else{
  console.log('result is: ' + files);
  }

  console.log('new file');
});
console.log(newfile);
//os module
const freeMemory = os.freemem();
console.log(freeMemory);

const TotalMemory = os.totalmem();
console.log(TotalMemory);
console.log(`TotalMemory is ${TotalMemory} and FreeMemory is ${freeMemory} this much in your system`);

// events 

const emitter = new events.EventEmitter();

//register a listener
emitter.on('messageLogged',function(args){
  console.log('Listener called' , args);
})

//raise an event here
emitter.emit('messageLogged' + { id:1 , name: 'rohit jaspal'});


//events till there
 

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world rohit')
})

// app.listen(3000, () => console.log('Example app listening on port 3000!'))

http.createServer((req , res) => {
  setTimeout(() => {
    res.write('')
  })
res.write('hello rohit');
res.end();
}).listen(5000,() => {
  console.log('server is connected at port at 5000');
});