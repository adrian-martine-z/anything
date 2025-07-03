const express = require('express'); 
const app = express(); 
const port = 3000; 

app.use(express.static(__dirname));

app.get('/anything/', (req, res) => {
  res.sendFile(__dirname + '/anything/index.html');
});

app.get('/anything/index', (req, res) => {
  res.sendFile(__dirname + '/anything/index.html');
});

app.get('/anything/MacDeMarco', (req, res) => {
  res.sendFile(__dirname + '/anything/index.html');
});

app.get('/anything/about', (req, res) => {
  res.sendFile(__dirname + '/anything/about.html');;
});;
app.get('/anything/FreeTickets', (req, res) => {
  res.sendFile(__dirname + '/anything/freetickets.html');;
});

app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
});
