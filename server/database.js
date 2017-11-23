import mongoose from 'mongoose';
import Promise from 'bluebird';
import constants from './config/constants';

// Native promises
mongoose.Promise = Promise;
// Connect
mongoose.connect(constants.db.mongo.uri);
mongoose.connection.on('error', error => {
  throw error;
});

