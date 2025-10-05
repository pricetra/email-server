import express from 'express';
import jsonwebtoken from 'jsonwebtoken';
import dotenv from 'dotenv';
import path from 'path';
import swaggerUi from 'swagger-ui-express';
import fs from 'fs'

dotenv.config({ path: '.env' })

const JWT_KEY = process.env.JWT_KEY;
if (!JWT_KEY) throw new Error('JWT_KEY required')

const app = express()
const port = 3001

// TODO: enable cors
app.use(express.json());

if (process.env.ENV !== 'production') {
  const swaggerPath = path.join(__dirname, "openapi", "openapi.json");
  if (fs.existsSync(swaggerPath)) {
    const swaggerDoc = JSON.parse(fs.readFileSync(swaggerPath, "utf-8"));
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));
  }
}

app.use((req, res, next) => {
  const authValue = req.headers.authorization
  if (!authValue) {
    res.status(401).json({ message: 'unauthorized' });
    return next();
  }

  const parsedAuthValue = authValue.split(' ');
  if (parsedAuthValue.length !== 2 || parsedAuthValue.at(0) !== 'Bearer') {
    res.status(401).json({ message: 'unauthorized' });
    return next();
  }

  const jwt = parsedAuthValue.at(1)!;
  try {
    jsonwebtoken.verify(jwt, JWT_KEY)
    return next();
  } catch {
    res.status(401).json({ message: 'unauthorized' });
  }
  return next();
})

app.get('/', (req, res) => {
  res.send({ message: 'Hello World!' })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
