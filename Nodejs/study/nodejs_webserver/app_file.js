var express = require('express');
var app = express();
app.locals.pretty = true;
app.set('views', './views_file');
app.set('view engine', 'jade');
app.listen(3000, () => {
  console.log('Connectied, 3000 port!');
});

app.get('/topic/new', (req, res) => {
  res.render('new');
})