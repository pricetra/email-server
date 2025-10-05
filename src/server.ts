import express from 'express';
import jsonwebtoken from 'jsonwebtoken';
import dotenv from 'dotenv';
import path from 'path';
import swaggerUi from 'swagger-ui-express';
import fs from 'fs'
import jwtAuth from './middleware/jwt-auth.js';
import { RegisterRoutes } from './routes/routes.js';

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

app.use(jwtAuth)

RegisterRoutes(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
