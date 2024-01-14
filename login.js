var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
var connection=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'accounts'
});

var app=express();
app.use(express.static('fonts'));
app.use('/css', express.static(__dirname + '/css')); 
app.use('/image', express.static(__dirname + '/image')); 
app.use('/src', express.static(__dirname + '/src')); 
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/html', express.static(__dirname + '/html'));



app.use(session({
    secret: 'secrect',
    resave: true,
    saveUninitialized: true
}));

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/Login.html'));
});

app.post('/auth', function(req, res) {
    var username = req.body.username;
    var password = req.body.password;
    if (username && password) {
        connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
            if (results != 0) {
                req.session.loggedin = true;
                 req.session.username = username;
                res.redirect('/homePage');
            }else {
                
                 res.send('Wrong Username or Password');
            }
            res.end();
        });
    }else {
        
        res.send('Please enter Username and Password');
        res.end();
    }
});
/*app.get('/home', function(req, res) {
    if (req.session.loggedin) {
        res.redirect('/homePage');
        // res.send('Welcome back, ' + req.session.username * '!');
    }else {
        res.send('Please login to view this page');
    }
    res.end();
});*/
app.get('/StudentLogin', function (req, res) {
    res.sendFile(path.join(__dirname + '/Login.html'));
})
app.get('/homePage', function (req, res) {
    res.sendFile(path.join(__dirname + '/home.html'));
})

app.listen(3000, () => {
    console.log('listening on port 3000');
});
/*app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.get('/',function(require,response){
    response.sendFile(path.join(__dirname+'/Login.html'));
});
app.post('/auth',function(require,response){
    var username=require.body.username;
    var password=require.body.password;
    if(username&&password){
        connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?',[username,password],function(error,results,fields){
              if(results.length>0){
                require.session.loggedin=true;
                require.session.username=username;
                response.redirect('/home');
              }else{
                response.send('Incorrect Username and/or Password');
              }
              response.end();
        });
    }else{
        response.send('Please enter Username and Password');
        response.end();
    }
});
app.use(express.static(__dirname + '/css'));
app.get('/home', function (req, res,html) {
    res.sendFile(path.join(__dirname+'/home.html'));
   });*/