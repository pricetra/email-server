import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import swaggerUi from 'swagger-ui-express';
import fs from 'fs'
import jwtAuth from './middleware/jwt-auth.js';
import { RegisterRoutes } from './routes/routes.js';
import { errorHandler } from './middleware/errors.js';

dotenv.config({ path: '.env' })

const JWT_KEY = process.env.JWT_KEY;
if (!JWT_KEY) throw new Error('JWT_KEY required')

const RESEND_API_KEY = process.env.RESEND_API_KEY;
if (!RESEND_API_KEY) throw new Error('RESEND_API_KEY required');

const app = express()
const port = 3001

// TODO: enable cors
app.use(express.json());
app.use(errorHandler);
if (process.env.ENV === 'production') app.use(jwtAuth)

RegisterRoutes(app);

if (process.env.ENV !== 'production') {
  const swaggerPath = path.join(process.cwd(), 'dist', "swagger.json");
  const swaggerDoc = JSON.parse(fs.readFileSync(swaggerPath, "utf-8"));
  app.get("/api-docs", (_req, res) => {
    res.status(200).json(swaggerDoc);
  });
  app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDoc));
}

app.listen(port, () => {
  console.log(`🚀 Email service started at: http://localhost:${port}`)
})
