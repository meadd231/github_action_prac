const express = require('express');
const app = express();

const port = 3000;

app.use(express.json());

const router = require('./routes');

app.use('/api', router);

app.listen(port, () => {
  console.log(`running ${port}`);
});