import app from './app.js';

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

app.listen(PORT, "0.0.0.0", () => {
  console.log(`listening on ${HOST}:${PORT}`);
})
