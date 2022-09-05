import express from 'express';
import route from './route/schedule.route';

const app = express();
const port = 8080;

app.use(express.json());

app.use(route);

app.listen(port, () => `Example app listening on port ${port}`);
