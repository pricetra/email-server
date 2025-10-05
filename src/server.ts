import express from 'express';
import jsonwebtoken from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config({ path: '.env' })

const JWT_KEY = process.env.JWT_KEY;
if (!JWT_KEY) throw new Error('JWT_KEY required')

const app = express()
const port = 3001

app.use((req, res, next) => {
  const authValue = req.headers.authorization
  if (!authValue) throw new Error('unauthorized');

  const parsedAuthValue = authValue.split(' ');
  if (parsedAuthValue.length !== 2 || parsedAuthValue.at(0) !== 'Bearer') throw new Error('unauthorized');

  const jwt = parsedAuthValue.at(1)!;
  if (jsonwebtoken.verify(jwt, JWT_KEY)) { }
  return next();
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
