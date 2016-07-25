/* add mysql node packages */
var mysql = require('mysql');
/* create mysql database */
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'mint'
});
/* connect mysql */
connection.connect(function(err) {
    if (err) {
    console.error('error connecting: ' + err.stack);
    return;
	}
	
});
/* export that to another required */
module.exports = connection;