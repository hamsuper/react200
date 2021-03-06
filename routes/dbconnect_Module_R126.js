var express = require('express');
var router = express.Router();
const mysql = require('mysql');
const bodyParser = require('body-parser');

router.use(bodyParser.json());

//mysql 서버 접속 정보
const connection = mysql.createConnection({
	host: 'database-1.cftrphdao14s.us-west-1.rds.amazonaws.com',
	port: '3306',
	database: 'react',
	user: 'admin',
	password: 'Ghdrlfehd1!',
});

router.post('/', (req, res) => {
	const mybatisMapper = require('mybatis-mapper');
	var param = req.body;

	//mybatis mapper경로 설정
	mybatisMapper.createMapper(['./models/' + param.mapper + '.xml']);
	var time = new Date();
	console.log('## ' + time + ' ##');
	console.log('\n Called Mapper Name  = ' + param.mapper);

	var format = { language: 'sql', indent: '  ' };
	//mysql 쿼리 정보 세팅
	var query = mybatisMapper.getStatement(param.mapper, param.mapper_id, param, format);
	console.log('\n========= Node Mybatis Query Log Start =========');
	console.log('* mapper namespce : ' + param.mapper + '.' + param.mapper_id + ' *\n');
	console.log(query + '\n');

	connection.query(query, function (error, results) {
		if (error) {
			console.log('db error************* : ' + error);
		}
		var time2 = new Date();
		console.log('## ' + time2 + ' ##');
		console.log('## RESULT DATA LIST ## : \n', results);
		string = JSON.stringify(results);
		var json = JSON.parse(string);
		res.send({ json });
		console.log('========= Node Mybatis Query Log End =========\n');
	});
});

module.exports = router;
