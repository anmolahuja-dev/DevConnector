const express = require('express');
const connectDB = require('./config/db');
const app = express();

// connect Db
connectDB();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => res.send('API Running..'));

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
