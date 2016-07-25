var express = require('express');
var bodyParser = require("body-parser");
var app = express();
var http = require('http')
, url  = require('url')
, fs   = require('fs');
var path = require("path");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(5000);
console.log('Express started on port 5000');

var user=require('./routes/user');
app.post('/geturl',function(req,res){
	var _name=req.params.username;
	console.log('requested value is : '+_name);
	res.set('Content-Type', 'application/json');
	res.send({'name':_name});
});
app.post("/account", function(req, res) {

    if(!req.body.username || !req.body.password) {
        return res.send({"status": "error", "message": "missing a parameter"});
    } 
    else 
    {
        return res.send(req.body);
    }
});
app.use('/api/',user);
  app.get('/',function(req,res){
		console.log("create");
		var query="select * from cf_turnover_table";
		connection.query(query,function(err,res){
			console.log('RESULT '+res);
			for(var i=0;i<res.length;i++)
			{
				console.log("trun over value :"+res[i].tr_value);
			}
		});
	});
