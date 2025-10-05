import express from 'express';
import jsonwebtoken from 'jsonwebtoken';
import dotenv from 'dotenv';
import path from 'path';
import swaggerUi from 'swagger-ui-express';
import fs from 'fs'
import jwtAuth from './middleware/jwt-auth.js';
import { RegisterRoutes } from './routes/routes.js';
import sendgridMail from '@sendgrid/mail';

dotenv.config({ path: '.env' })

const JWT_KEY = process.env.JWT_KEY;
if (!JWT_KEY) throw new Error('JWT_KEY required')

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
if (!SENDGRID_API_KEY) throw new Error('SENDGRID_API_KEY, required');

sendgridMail.setApiKey(SENDGRID_API_KEY)

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

if (process.env.ENV === 'production') app.use(jwtAuth)

RegisterRoutes(app);

app.use((err: unknown, req: express.Request, res: express.Response, next: express.NextFunction) => {
  if (err instanceof ValidateError) {
    return res.status(422).json({
      message: 'Validation Failed',
      details: err?.fields,
    });
  }

  if (err instanceof Error) {
    return res.status(500).json({
      message: err.message,
    });
  }

  res.status(500).json({ message: 'Internal Server Error' });
});

app.listen(port, () => {
  console.log(`🚀 Email service started at: http://localhost:${port}`)
})
