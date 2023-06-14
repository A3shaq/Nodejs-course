const http = require('http');
const fs = require('fs');
// Create the server
const server = http.createServer((req, res) => {
  // Set the content type of the response
  res.setHeader('Content-Type', 'text/plain');

  // Route handling
  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Welcome to the homepage!');
  } else if (req.url === '/about') {
    res.statusCode = 200;
    res.end('About page');
  } else if (req.url === '/contact') {
    res.statusCode = 200;
    res.end('Contact page');
  }
  else if (req.url === '/upload') {
    // Read the file
    fs.readFile('./fileTemp.txt', 'utf8', (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end('Error reading the file');
      } else {
        res.statusCode = 200;
        res.end(data);
      }
    });
  }
  else {
    res.statusCode = 404;
    res.end('404 Not Found');
  }
});

// Start the server
const port = 5000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});