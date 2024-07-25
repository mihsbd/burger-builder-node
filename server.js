const dotenv = require('dotenv');
dotenv.config();        // connects .env file

const app = require('./app');
const mongoose = require('mongoose');

const DB = process.env.MONGODB_SERVER.replace('<password>', process.env.DB_PASSWORD)
// const DB = process.env.LOCAL_MONGODB_SERVER

mongoose.connect(DB)
    .then(() => console.log('Connected to MongoDB') )
    .catch((err) => console.error('MongoDB Connection Failed!') );

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});