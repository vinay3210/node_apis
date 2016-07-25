var connection = require('../config/db');
module.exports = (function() {
    'use strict';
    var router = require('express').Router();
    router.post('/login', function(req, res) {
    	console.log("create");
		var query="select * from cf_turnover_table";
		var x=[];
		
		connection.query(query,function(err,row){
			console.log('RESULT '+res);
			
			for(var i=0;i<row.length;i++)
			{
				console.log("trun over value :"+row[i].tr_value);
				x.push({trvalue:row[i].tr_value});
			}
			console.log('x value is :'+x.length);
			res.set('Content-Type', 'application/json');
			res.send(x);
		});
        
    });

    return router;
})();