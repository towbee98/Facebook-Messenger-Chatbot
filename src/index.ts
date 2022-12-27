import express, { Application, Request, Response, NextFunction } from 'express';

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

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    const statusCode = err.status || 500;
    res.status(statusCode).json({
        status: 'error',
        message: err.message,
    });
});
