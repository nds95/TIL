var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
//mysql 연동
var mysql = require('mysql');
const { result } = require('underscore');
var conn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'entjd8347()',
  database : 'o2'
});
conn.connect();

app.use(bodyParser.urlencoded({ extended: false}));

app.locals.pretty = true;
app.set('views', './views_mysql');
app.set('view engine', 'jade');

app.get('/topic/add', (req, res) => {
  var sql = 'SELECT id, title FROM topic';
  conn.query(sql, (err, topics, fields) => {
    if(err) {
      console.log(err);
      res.status(500).send('Internal Server Error');
    } else {
      res.render('add', {topics:topics});
    }
  });
});
app.post('/topic/add', (req, res) => {
  var title = req.body.title;
  var description = req.body.description;
  var sql = 'INSERT INTO topic (title, description) VALUES (?, ?)';
  conn.query(sql, [title, description], (err, result, fields) => {
    if(err) {
      console.log(err);
      res.status(500).send('Internal Server Error');
    } else {
      res.redirect('/topic/'+result.insertId);
    }
  })
});
app.post('/topic/:id/edit', (req, res) => {
  var title = req.body.title;
  var description = req.body.description;
  var id = req.params.id;
  var sql = 'UPDATE topic SET title=?, description=? WHERE id=?';
  conn.query(sql, [title, description, id], (err, result, fields) => {
    if(err) {
      console.log(err);
      res.status(500).send('Internal Server Error');
    } else {
      res.redirect('/topic/'+id);
    }
  });
});
app.get('/topic/:id/edit', (req, res) => {
  var sql = 'SELECT id, title FROM topic';
  conn.query(sql, (err, topics, fields) => {
    var id = req.params.id;
    if(id) {
      var sql = 'SELECT * FROM topic WHERE id=?';
      conn.query(sql, [id], (err, topic, fields) => {
        if(err) {
          console.log(err);
          res.status(500).send('Internal Server Error');
        } else {
          res.render('edit', {topics:topics, topic:topic[0]});
        }
      });
    } else {
      console.log('There is no id.');
      res.status(500).send('Internal Server Error');
    }
  });
});
app.get(['/topic', '/topic/:id'], (req, res) => {
  var sql = 'SELECT id, title FROM topic';
  conn.query(sql, (err, topics, fields) => {
    var id = req.params.id;
    if(id) {
      var sql = 'SELECT * FROM topic WHERE id=?';
      conn.query(sql, [id], (err, topic, fields) => {
        if(err) {
          console.log(err);
          res.status(500).send('Internal Server Error');
        } else {
          res.render('view', {topics:topics, topic:topic[0]});
        }
      })
    } else {
    res.render('view', {topics:topics});
    }
  });
});
app.post('/topic', (req, res) => {
  var title = req.body.title;
  var description = req.body.description;
  fs.writeFile('data/'+title, description, (err) => {
   if(err){
    console.log(err);
    res.status(500).send('Internal Server Error');
   } else {
    res.redirect('/topic/'+title)
    res.send('Succress');
   }
  });
});
app.get('/topic/:id/del', (req, res) => {
  var sql = 'SELECT id, title FROM topic';
  var id = req.params.id;
  conn.query(sql, (err, topics, fields) => {
    var sql = 'SELECT * FROM topic WHERE id=?';
    conn.query(sql, [id], (err, topic) => {
      if(err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
      } else {
        if(topic.length === 0) {
          console.log('There is no record.');
          res.status(500).send('Internal Server Error');
        } else {
          res.render('del', {topics:topics, topic:topic[0]});
        }
      }
    });
  });
});
app.post('/topic/:id/del', (req, res) => {
  var sql = 'DELETE FROM topic WHERE id=?';
  var id = req.params.id;
  conn.query(sql, [id], (err, rows, fields) => {
    if(err){
      console.log(err);
      res.status(500).send('Internal Server Error');
     } else {
      res.redirect('/topic');
     }
  });
});
app.listen(3000, () => {
  console.log('Connectied, 3000 port!');
});