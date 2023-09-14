import express from 'express';

import Router from './routes/pageRoute';

const app = express();
const port = 3000;

app.use(Router);

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));
