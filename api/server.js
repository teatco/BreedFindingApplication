const express = require('express');
const cors = require('cors');
const config = require('./config');
const app = express();
app.use(express.static('public'));
app.use(cors());
const index = require('./findBreedingService/index');

app.get('/', (req, res) => {
  const help = `
  <pre>
    Welcome to the Address Book API!
    The following endpoints are available:
    GET /api/findBreeding
  </pre>
  `;

  res.send(help);
});

app.get('/api/findBreeding', async (req, res) => {
  const data = await index.run();
  //console.log(data);
  res.json(data);
});

app.listen(config.port, () => {
  console.log('Server listening on port %s, Ctrl+C to stop', config.port);
});
