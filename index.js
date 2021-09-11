const express = require('express');
const app = express();
const cors = require('cors');
const userRoutes = require('./routes/index');

const PORT = process.env.PORT || 9000


app.use(express.json({ limit: '50mb' }));
app.use(cors());
app.use(userRoutes)


app.listen(PORT, () => console.log(`listening on port: ${PORT}`))










