const express = require("express");
const app = express();
app.use(express.static("./src/build"));
app.listen(process.env.PORT || 8080, () =>
  console.log(`Listening on port ${process.env.PORT || 8080}!`)
);
