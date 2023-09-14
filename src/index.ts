import express from "express";

import pageRoute from "./routes/pageRoute";

const app = express();
const port = 3000;

app.use(pageRoute);

app.listen(port, () =>
  console.log(`App listening at http://localhost:${port}`)
);
