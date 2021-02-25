const http = require('http');
const express = require('express');
const { request, response } = require('express');

const app = express();

const users = ['DS', 'JJ', 'JS', 'CH'];

// const server = http.createServer((request, response) => {
//   if (request.url === '/') {
//     response.end('<h1>Welcome!</h1>');
//  } else if (request.url === '/users') {
//     response.end('<h1>${users}</h1>');
//  } else if (request.url.split('/')[1] === 'users') {
//    const userIdx = request.url.split('/')[2];
//    const userName = users[userIdx - 1];

//    response.end('<h1>${usersName}</h1>');
//  } else {
//     response.end('<h1>Page Not Available</h1>');
//  }
// });
// server.listen(3000);

app.get('/', (request, response) => {
  response.end('<h1>Welcome!</h1>');
});

app.get('/users', (request, response) => {
  response.end('<h1>${users}</h1>');
});

app.get('/users/:id', (request, response) => {
  const userName = users[request.params.id - 1];
  response.end('<h1>${userName}</h1>');
});

app.get('*', (request, response) => {
  response.end('<h1>Page Not Available</h1>');
});

app.listen(3000);