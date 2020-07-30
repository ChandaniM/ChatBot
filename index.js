//Server side code
var express = require('express');
var app = express();
var http = require('http').createServer(app);
var path=require('path');
var io = require('socket.io')(http);
let message=require('./questions.js');
// path
app.use(express.static(path.join(__dirname, 'public')));
let user_info={};
//Socket implementation
io.on('connection', (socket) => {
  //console.log(socket.id);
  io.to(socket.id).emit('welcome message','Send Hello to begin');
  socket.on('chat message', (msg) =>{
  if(msg=='Hello'|| msg==='hello'){
  io.to(socket.id).emit('chat message',message[msg]);
}
else if(/^[0-9]+[a-z]$/.test(msg)){
  let val;
  for(let i in message[user_info[socket.id]]){
    if(i.startsWith(msg)){
    val=message[user_info[socket.id]][i];
  }
}
io.to(socket.id).emit('chat message',val);
}
    else if(message[msg]===undefined || message[msg]===null){
      io.to(socket.id).emit('chat message','Sorry the query you\'re looking for doesn\'t exist');
    }
    
    else{
      user_info[socket.id]=msg;
      //console.log(user_info);
      io.to(socket.id).emit('chat message',Object.keys(message[msg]));
    }
  	
  });
  socket.on('disconnect', () => {
    console.log('user disconnected');  
  });


});
//Server listening port
http.listen(3000,()=>{
  console.log('Listening on 3000');
});
