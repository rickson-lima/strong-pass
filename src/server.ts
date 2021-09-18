import express from 'express';
import routes from './routes';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';

import * as corsOptions from './config/cors.json';

const app = express();

app.use(cors(corsOptions));
app.use(helmet());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);


// torna os arquivos da pasta public em estáticos
app.use(express.static("public"))

app.listen(3333, () => {
    console.log('API listenning on 3333 port');
});

export default app;