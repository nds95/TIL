var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
app.use(bodyParser.urlencoded({ extended: false}));

app.locals.pretty = true;
app.set('views', './views_file');
app.set('view engine', 'jade');

app.get('/topic/new', (req, res) => {
  fs.readdir('data', (err, files) => {
    if(err) {
      console.log(err);
      res.status(500).send('Internal Server Error');
    }
    res.render('new', {topics:files});
  })
});
app.get(['/topic', '/topic/:id'], (req, res) => {
  fs.readdir('data', (err, files) => {
    if(err) {
      console.log(err);
      res.status(500).send('Internal Server Error');
    }
    var id = req.params.id;
    if(id){
      fs.readFile('data/'+id, 'utf8', (err, data) => {
        if(err) {
          console.log(err);
          res.status(500).send('Internal Server Error');
        }
        res.render('view', {topics:files, title:id, description:data});
      });
    } else {
      res.render('view', {topics:files, title:'Welcome', description: 'Hello, JavaScript for Server'});
    }
  })
});
// app.get('/topic/:id', (req, res) => {
//   var id = req.params.id;
//   fs.readdir('data', (err, files) => {
//     if(err) {
//       console.log(err);
//       res.status(500).send('Internal Server Error');
//     }
//     fs.readFile('data/'+id, 'utf8', (err, data) => {
//       if(err) {
//         console.log(err);
//         res.status(500).send('Internal Server Error');
//       }
//       res.render('view', {topics:files, title:id, description:data});
//     });
//   });
// });
app.post('/topic', (req, res) => {
  var title = req.body.title;
  var description = req.body.description;
  fs.writeFile('data/'+title, description, (err) => {
   if(err){
    res.status(500).send('Internal Server Error');
   } else {
    res.redirect('/topic/'+title)
    res.send('Succress');
   }
  });
});

app.listen(3000, () => {
  console.log('Connectied, 3000 port!');
});