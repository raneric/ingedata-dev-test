import app from './app.js';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Host name is " + process.env.DB_HOST);
  console.log("listening on http://localhost:3000");
})
