const express = require('express');
const bodyParser = require('body-parser'); //post방식의 body를 분석할 수 있는 패키지
const app = express();
app.locals.pretty = true;
app.set('views', './views');
app.set('view engine', 'jade'); //template엔진 설정 - jade
app.use(bodyParser.urlencoded({ extended: false })); // bodyParser 실행코드.
const port = 3000;

app.post('/form_receiver', (req, res) => {
  var title = req.body.title;
  var description = req.body.description;
  res.send(title+', '+description);
});

app.get('/form', (req, res) => {
  res.render('form');
})

app.get('/form_receiver', (req, res) => {
  var title = req.query.title;
  var description = req.query.description;
  res.send(title+ ',' +description)
})

app.use(express.static('public'));
app.get('/template', (req, res) => {
  const temp = 
  res.render('temp', {time:Date()});
})

app.get('/topic/:id', (req, res) => {
  var topics = [
    'Java is...',
    'nodejs is...',
    'Express is...'
  ];
  var as = `
  <a href="/topic?id=0">Java</a><br>
  <a href="/topic?id=1">Nodejs</a><br>
  <a href="/topic?id=2">Express</a><br><br>
  ${topics[req.params.id]}
  `
  res.send(as);
});

app.get('/form', (req, res) => {

})

app.get('/topic/:id/:mode', (req, res) => {
  res.send(req.params.id + ',' + req.params.mode);
});

app.get('/dynamic', (req, res) => {
  var lis = '';
  for(var i = 1; i<=5; i++){
    lis += `<li>${'coding' + ' ' + i}</li>`;
  };
  var output = `<!DOCTYPE html>
  <html>
    <head>
      <title>pratice</title>
      <meta charset="utf-8" />
    </head>
    <body>
      Hello!
      <ul>
      ${lis}
      </ul>
    </body>
  </html>`
  res.send(output);
})

app.get('/', (req, res) => {
  res.send('Hello');
});

app.get('/route', (req, res) => {
  res.send('Hello router, <img src="/1.png" />');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});