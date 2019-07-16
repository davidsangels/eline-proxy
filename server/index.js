var express  = require('express');
var app      = express();
var httpProxy = require('http-proxy');
var apiProxy = httpProxy.createProxyServer();
var reservation = 'http://localhost:3001';
var imgsGallery = 'http://localhost:3002';
var reviews = 'http://localhost:3003';
const port = 3000;

app.use(express.static('public'));

// RESERVATION:
app.get('/bookings', (req, res) => {
  apiProxy.web(req, res, {target: reservation});
});

// IMAGES GALLERY:
app.get('/data', (req, res) => {
  apiProxy.web(req, res, {target: imgsGallery});
});

// REVIEWS SERVICE:
app.get('/api/places', (req, res) => {
  apiProxy.web(req, res, {target: reviews});
});
app.get('/api/reviews/:idPlace', (req, res) => {
  apiProxy.web(req, res, {target: reviews});
});
app.get('/api/ratings/:idPlace', (req, res) => {
  apiProxy.web(req, res, {target: reviews});
});
app.get('/api/reviews/search/:idPlace/:query', (req, res) => {
  apiProxy.web(req, res, {target: reviews});
});

app.listen(port, () => console.log(`App listening on port ${port}!`));