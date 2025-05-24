const app = require('../app');
const PORT = process.env.PORT || 3000;

app.listen(3000, () => {
  console.log("listening on http://localhost:3000");
})
