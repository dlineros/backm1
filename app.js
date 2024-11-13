const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/mean-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const port = 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));

const routes = require('./routes');
app.use('/api', routes);
