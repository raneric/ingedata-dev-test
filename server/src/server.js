import app from './app.js';
import dotenv from 'dotenv';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("listening on http://localhost:3000");
})
