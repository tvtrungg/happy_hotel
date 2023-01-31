const express = require('express');
const app = express();

const dbconflig = require('./db/db');
const roomRoutes = require('./routes/roomRoutes');

app.use('/api/room', roomRoutes);


const port  = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));



