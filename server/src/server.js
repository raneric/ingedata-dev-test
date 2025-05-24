import app from './app.js';
import sequelize from './config/sequelize.js';

const PORT = process.env.PORT || 3000;

app.listen(3000, () => {
  console.log("listening on http://localhost:3000");
})
