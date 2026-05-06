

// const http = require('http');
// const server = http.createServer((req,res) => {
//     res.end('Hello World');
// });
// server.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });

// const http = require("http");
// const fs = require("fs");
// const chalk = require("chalk");

// const server = http.createServer((req, res) => {

//   if (req.url === "/") {
//     console.log(chalk.green("user visited the homepage"));

//     fs.readFile("index.html", (err, data) => {
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.end(data);
//     });

//   } else {
    

//     console.log(
//       chalk.red(`✖ user visited wrong route: ${req.url}`)
//     );

//     res.writeHead(404, { "Content-Type": "text/html" });
//     res.end("<h1>404 - Page Not Found</h1>");
//   }

// });

// server.listen(3000, () => {
//   console.log(chalk.blue("Server running on localhost:3000"));
// });

const http = require("http");
const fs = require("fs");
const chalk = require("chalk");

const server = http.createServer((req, res) => {

  // Homepage
  if (req.url === "/") {
    console.log(chalk.green("user visited the homepage"));

    fs.readFile("index.html", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });

  }

  // JS file
  else if (req.url === "/script.js") {
    fs.readFile("script.js", (err, data) => {
      res.writeHead(200, { "Content-Type": "application/javascript" });
      res.end(data);
    });
  }

  // CSS file
  else if (req.url === "/styles.css") {
    fs.readFile("styles.css", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/css" });
      res.end(data);
    });
  }

  // Ignore favicon (very important 😭)
  else if (req.url === "/favicon.ico") {
    res.writeHead(204);
    res.end();
  }

  // Wrong routes
  else {
    console.log(
      chalk.red(`✖ Wrong route: ${req.url}`)
    );

    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>404 - Page Not Found</h1>");
  }

});

server.listen(3000, () => {
  console.log(chalk.blue("sever is running on localhost:3000"));
});



// const fs = require('fs');
// const chalk = require('chalk');
// console.log(chalk.red("Hello world"));


// // const fs = require('fs');
// // const http = require('http');
// // const path = require('path');
// // const chalk = require('chalk')

// const filePath = path.join(__dirname, 'Backend/index.html');

// const sever = http.createServer((req, res) => {
//     fs.readFile (err, data) => {
//         if (req.url === '/') {
//             res.writeHead(200, { 'Content-Type': 'text/html' });
//             res.end(data);
//         }else if (req.url === '/favicon.ico'){
//             console.log(chalk.blue('Favicon Loaded'))
//             res.end();
//         }
//          else {
//             console.log(chalk.red('User accessed a non-existent page'));
//             res.end('File not found');
//         }
//     });


// const server = http.createServer((req, res) => {

//   // Ignore favicon request
//   if (req.url === '/favicon.ico') {
//     res.end();
//     return;
//   }

//   // HOME
//   if (req.url === '/') {
//     console.log(chalk.green('User visited HOME'));

//     fs.readFile('Backend/index.html', (err, data) => {
//       if (err) {
//         res.end('Error loading home page');
//         return;
//       }
      

//       res.writeHead(200, { 'Content-Type': 'text/html' });
//       res.end(data); // send HTML file
//     });

//   // ABOUT
//   } else if (req.url === '/about') {
//     console.log(chalk.blue('User visited ABOUT'));

//     fs.readFile('about.html', (err, data) => {
//       if (err) {
//         res.end('Error loading about page');
//         return;
//       }

//       res.writeHead(200, { 'Content-Type': 'text/html' });
//       res.end(data);
//     });
//   // NOT FOUND
//   } else {
//     console.log(chalk.red('Unknown route'));

//     res.writeHead(404, { 'Content-Type': 'text/html' });
//     res.end('<h1 style="color:red;">404 - Page Not Found</h1>');
//   }
// });

// // Start server
// server.listen(3000, () => {
//   console.log(chalk.yellow('Server running on port 2010'));
// });