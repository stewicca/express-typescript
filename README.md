# Express TypeScript

### Preparation

First, create a directory for the application we will build:

```
mkdir express-typescript
```

Navigate into the directory you just created:

```
cd express-typescript
```

Run the following command so that our application can run in a Node.js environment with a package.json file:

```
npm init
```

When this command is run, it will ask the following questions:

```
package name: (src) express-typescript
version: (1.0.0)
description:
entry point: index.ts
test command:
git repository:
keywords:
author: wreccy
lisence: (ISC)
```

Make sure the `entry point` is set to index.ts

### Install Dependencies

Since we will be working with Express.js, we need to install express:

```
npm install --save express
```

We also need to install TypeScript, the Express types to leverage TypeScript, ts-node to run the server with TypeScript, and `nodemon` for running the server with automatic refresh features:

```
npm install --save-dev typescript @types/express ts-node nodemon
```

Make sure your `package.json` file looks like this:

```json
{
  "name": "express-typescript",
  "version": "1.0.0",
  "description": "",
  "main": "index.ts",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "wreccy",
  "license": "ISC",
  "dependencies": {
    "express": "^4.18.2"
  },
  "devDependencies": {
    "@types/express": "^4.17.17",
    "nodemon": "^3.0.1",
    "ts-node": "^10.9.1",
    "typescript": "^5.2.2"
  }
}
```

### Creating a Server with Express.js and TypeScript

Let's create what can be considered the most basic server using Express.js. Inside the `src` folder, create a file named `index.ts` and copy the following code:

```typescript
import express from "express";

const app = express();
const port = 3000;

app.listen(port, () =>
  console.log(`App listening at http://localhost:${port}`)
);
```

### Creating Endpoints

Now let's create endpoints to display on the web page. Here, I will create 3 endpoints: `/` is our main page, `/about` is the about page, and `/contact` is our contact page. Inside the `src` folder, create a `routes` folder and create a file named `pageRoute.ts`:

```typescript
import express, { Request, Response } from "express";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Welcome");
});

router.get("/about", (req: Request, res: Response) => {
  res.send("About");
});

router.get("/contact", (req: Request, res: Response) => {
  res.send("Contact");
});

export default router;
```

We need to include the routes we created into `index.ts`:

```typescript
import express from "express";

import pageRoute from "./routes/pageRoute";

const app = express();
const port = 3000;

app.use(pageRoute);

app.listen(port, () =>
  console.log(`App listening at http://localhost:${port}`)
);
```

### Run the Server

Before we run our server, let's create a command in the `package.json` file. Here, I will remove the `test` command and change it to the following:

```json
{
  "name": "express-typescript",
  "version": "1.0.0",
  "description": "",
  "main": "index.ts",
  "scripts": {
    "start": "nodemon src/index.ts"
  },
  "author": "wreccy",
  "license": "ISC",
  "dependencies": {
    "express": "^4.18.2"
  },
  "devDependencies": {
    "@types/express": "^4.17.17",
    "nodemon": "^3.0.1",
    "ts-node": "^10.9.1",
    "typescript": "^5.2.2"
  }
}
```

Now it's time to run our server by executing the command:

```
npm start
```

Congratulations! You can check the result at `http://localhost:3000`.
