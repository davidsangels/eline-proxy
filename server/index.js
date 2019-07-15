var express  = require('express');
var app      = express();
var httpProxy = require('http-proxy');
var apiProxy = httpProxy.createProxyServer();
var reviewsServer = 'http://localhost:3001';
const port = 3000;

app.use(express.static('public'));

// Get all idPlaces
app.get('/api/places', (req, res) => {
  apiProxy.web(req, res, {target: reviewsServer});
})

// Get all the reviews for a specific place
app.get('/api/reviews/:idPlace', (req, res) => {
  apiProxy.web(req, res, {target: reviewsServer});
})

// Get all the ratings for a specific place
app.get('/api/ratings/:idPlace', (req, res) => {
  apiProxy.web(req, res, {target: reviewsServer});
})

// Get all the reviews for a specific query and a specific idPlace
app.get('/api/reviews/search/:idPlace/:query', (req, res) => {
  apiProxy.web(req, res, {target: reviewsServer});
})

app.listen(port, () => console.log(`App listening on port ${port}!`));