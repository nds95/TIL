const http = require('http');

//웹 서버 객체 생성
const server = http.createServer();

//port 지정
const port = 3000;
server.listen(port, function(){
  console.log('웹 서버가 시작되었습니다. : %d', port);
});

//클라이언트 연결 이벤트 처리
server.on('connection', function(socket){
  const addr = socket.address();
  console.log('클라이언트가 접속했습니다. : %s, %d', addr.address, addr.port);
});