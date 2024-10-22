const express = require("express");
const app = express();

const port = 3000;

var counter = 0;

app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
