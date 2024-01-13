const express = require('express');
const bodyParser = require('body-parser');
const itemsRouter = require('./routes/items');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/items', itemsRouter);

app.listen(port, () => {
  console.log(`Express Shopping List app listening at http://localhost:${port}`);
});
