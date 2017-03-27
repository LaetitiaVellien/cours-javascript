// inspired from http://code.runnable.com/Umgo967vRZQMAABQ/a-simple-webserver-with-connect-for-node-js

var http = require('http');
var connect = require('connect');
var socketio = require('socket.io');
var bodyParser = require('body-parser');
var serveStatic = require('serve-static');
var Cookies = require('cookies');
var GoogleAuth = require('./google-auth.js')

var PORT = process.env.PORT || 8080;

var allowCrossDomain = function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS'); // TODO: reduce
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
};

// Configure the app
var app = connect();
app.use(allowCrossDomain);
app.use(bodyParser.urlencoded({ extended: false })); // parse urlencoded request bodies into req.body
app.use(bodyParser.json({ type: '*/*', strict: false })); // parse json request bodies into req.body
app.use(function(req, res, next) {
  var cookies = new Cookies(req);
  req.cookie = JSON.parse(decodeURIComponent(cookies.get('js-ajax-twitter')));
  if (req.cookie && req.cookie.token) {
    GoogleAuth.checkToken(req.cookie.token, function(err, user) {
      req.googleUser = user;
      next();
    });
  } else {
    next();
  }
});
app.use(serveStatic('./public', {'index': ['index.html']})); // Serve public files

// Prepare socket.io server for public/log.html
var httpServer = http.createServer(app)
var io = socketio(httpServer);

// /tweet is a POST API endpoint for users to connect and send messages
app.use(/*'/tweet',*/ function (req, response, next) {
  console.log('-', req.method, req.url, req.body, 'from', req.googleUser || req.cookie);
  function error(text) {
    console.log('=> /!\\ error:', text);
    response.end(JSON.stringify({ error: text }));
  }
  if (req.url !== '/tweet') {
    error('please use the /tweet URL.');
  } else if (req.method !== 'POST') {
    error('please use a POST request. not a GET.');
  } else if (!req.cookie) {
    error('cookie not found. please log in.');
  } else if (!req.googleUser) {
    error('invalid cookie found. please log in with provided code.');
  } else if (req.googleUser.domain != 'eemi.com') {
    error('invalid cookie found. please log in with your EEMI account.');
  } else {
    response.end(JSON.stringify({ ok: 'OK' }));
    // display message on log.html
    io.emit('chat', {
      message: req.body.message,
      user: req.googleUser,
      ip: req.connection.remoteAddress,
    });
  }
});

// Listen for HTTP/HTTPS conncections on port 3000
//app.listen(PORT);
httpServer.listen(PORT);

console.log('Server running on port', PORT, '...');
//console.log('Try http://' + os.hostname() + '.local:' + PORT + '/'); // note: hostname is not reachable on EEMI LAN
