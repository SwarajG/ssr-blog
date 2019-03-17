require('dotenv').config()
import express from 'express';
import routes from './routes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import 'isomorphic-fetch';

const app = express();
const mongodbUrl = process.env.mongodbUrl;

app.use(express.static('public'));
app.use(bodyParser.json());

routes(app);

mongoose.Promise = global.Promise;
mongoose.connect(mongodbUrl, { useNewUrlParser: true });
const db = mongoose.connection;

// start the app with mongodb
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`App is running on ${port} port...`);
  });
});