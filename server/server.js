import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import morgan from 'morgan';
import helmet from 'helmet';
import errorhandler from 'errorhandler';

import routes from './routes';
import {constants} from './config';
import {errorNotification} from './lib/errorHandler';

const app = express();

// Secure by setting various HTTP headers
app.use(helmet());
// Enable CORS
app.use(cors());
// Request logger
app.use(morgan('dev'));
// Parse incoming request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Lets use HTTP verbs such as PUT/DELETE
app.use(methodOverride());
// Mount public routes
app.use('/public', express.static(`${__dirname}/public`));
// Mount API routes
app.use(constants.apiPrefix, routes);
// Errors handling
app.use(errorhandler({log: errorNotification})); // dev

app.listen(constants.port, constants.host, () => {
  // eslint-disable-next-line no-console
  console.log(`
    <<<<<<<<<< Server launching >>>>>>>>>>
    Port: ${constants.port}
    Env: ${app.get('env')} \n
  `);
});

export default app;
