import app from './app.js';
import dotenv from 'dotenv';

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

app.listen(PORT, HOST, () => {
  console.log(`listening on ${HOST}:${PORT}`);
})
