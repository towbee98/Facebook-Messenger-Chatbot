import express, { Application } from 'express';

import config from './config';
import router from './routes/index';

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Setup our view engine
app.set('view engine', 'pug');

//define the location of our templates
app.set('views', 'views');

app.use('/', router);
let port = config.PORT || 8080;

app.listen(port, () => {
    console.log(`App is listening at port ${port}`);
});
