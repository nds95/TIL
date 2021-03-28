var mysql = require('mysql');
var conn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'entjd8347()',
  database : 'o2'
});
conn.connect();
// var sql = 'SELECT * FROM topic'
// conn.query(sql, (err, rows, fields) => {
//   if (err) {
//     console.log(err);
//   } else {
//     for(var i=0; i<rows.length; i++) {
//       console.log(rows[i].title);
//     }
//   }
// });

var sql = 'UPDATE topic SET title=?, description=? WHERE id=?'
var params = ['UDC', 'Uijeongbu Developer Community', 3];
conn.query(sql, params, (err, rows, fields) => {
  if (err) {
    console.log(err);
  } else {
    console.log(rows);
  }
});
conn.end();