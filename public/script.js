// Client Side code
(function () {
    var socket = io();//client side implementation of socket
    let m=document.getElementById('m');
    let message=document.getElementById('messages');
      document.getElementById('button').addEventListener('click',(e)=>{
        //Checks Blank input
        if(/^\s*$/.test(m.value)){
          alert('Please enter some input');
          return;
        }
        //Create Li for client messages
      let client_message=document.createElement('li');
      client_message.classList.add('client-message');
      client_message.innerHTML=`<span class='client-message-text'>${m.value}</span>` ;
      message.appendChild(client_message);
      //Send to server
      if(Object.keys(option).includes(m.value)){
        socket.emit('chat message',option[m.value]);
      }
      else{
        socket.emit('chat message',m.value);   
      }
      m.value='';
      return false;
    });
    socket.on('chat message', function(msg){
      // console.log({msg})
      let server_message=document.createElement('li');
      server_message.classList.add('server-message');
      let div=document.createElement('div');
      div.classList.add('server-message-text');
      server_message.appendChild(div);
      if(Array.isArray(msg)){
        //Create Span for each array element
        msg.forEach((value)=>{
          let span=document.createElement('span');
          span.classList.add('server-message-span');
          span.innerHTML=value;
          div.appendChild(span);
        });
      }else{
        server_message.innerHTML=`<span class='server-message-text'>${msg}</span>`;
      } 
      message.appendChild(server_message);
    });
    socket.on('welcome message',msg=>{
      let li=document.createElement('li');
      li.classList.add('server-message');
      li.innerHTML=`<span class='server-message-text'>${msg}</span>`;
      message.appendChild(li);
    });
})();
//Mapping client input
const option={
  'Hello':'hello',
  'Hello ':'hello',
  'hello':'hello',
  'hello ':'hello',
  '*':'hello',
  '1':'LP',
  '2':'LP1',
  '3':'LP2',
  '4':'LP3',
  '5':'workgroup',
  '6':'Live project',
  '7':'Internship',
  '8':'Bitrix24 account',
  '9':'Other Questions'
};

 