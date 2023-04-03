const express = require("express");
const app = express();
const port = process.env.PORT || process.env.WEBSITES_PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
