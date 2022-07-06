const mysql = require('mysql');

router.use(bodyParser.json());

//mysql 서버 접속 정보
const connection = mysql.createConnection({
	host: 'database-1.cftrphdao14s.us-west-1.rds.amazonaws.com',
	port: '3306',
	database: 'react200',
	user: 'admin',
	password: 'Ghdrlfehd1!',
});

router.post('/', (req, res) => {

	connection.query(query, function (error, results) {
		string = JSON.stringify(results);
		var json = JSON.parse(string);
		res.send({ json });
		console.log('========= Node Mybatis Query Log End =========\n');
	});
});

module.exports = router;
