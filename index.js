const express = require('express'); 
const app = express(); 
const port = 3000; 

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/index', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/MacDeMarco', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/about.html');;
});;
app.get('/FreeTickets', (req, res) => {
  res.sendFile(__dirname + '/freetickets.html');;
});

app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
});
