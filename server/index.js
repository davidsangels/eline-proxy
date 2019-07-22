var express  = require('express');
var app      = express();
var httpProxy = require('http-proxy');
var apiProxy = httpProxy.createProxyServer();
var reservation = 'http://13.57.205.162';
var imgsGallery = 'http://13.56.158.243';
var reviews = 'http://18.188.190.48';
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use('/', express.static('public'));
app.use('/:id', express.static('public'));

// RESERVATION:
app.get('/bookings/:idPlace', (req, res) => {
  apiProxy.web(req, res, {target: reservation});
});

// IMAGES GALLERY:
app.get('/data/:id', (req, res) => {
  apiProxy.web(req, res, {target: imgsGallery});
});

// REVIEWS SERVICE:
app.get('/reviews/:idPlace', (req, res) => {
  apiProxy.web(req, res, {target: reviews});
});
app.get('/reviews/ratings/:idPlace', (req, res) => {
  apiProxy.web(req, res, {target: reviews});
});
app.get('/reviews/search/:idPlace/:query', (req, res) => {
  apiProxy.web(req, res, {target: reviews});
});

app.listen(port, () => console.log(`App listening on port ${port}!`));