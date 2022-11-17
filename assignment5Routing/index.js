const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/welcome' || req.url === '/') {
    res.writeHead(200, { 'Content-type': 'text/plain' });
    res.end('Welcome To Dominos!');
  } else if (req.url === '/contact') {
    res.writeHead(200, { 'Content-type': 'application/json' });
    res.write(
      JSON.stringify({
        phone: '18602100000',
        email: 'guestcaredominos@jublfoods.com',
      })
    );
    res.end();
  } else {
    res.writeHead(404, {
      'Content-type': 'text/html',
      'my-own-header': 'hello-world',
      'Keep-Alive': 10,
    });
    res.end('<h1>Page not found!</h1>');
  }
});
server.listen(8081, () => {
  console.log('Listening to requests on port 8081');
});
module.exports = server;
