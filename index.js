const express = require("express");
const path = require("path");
const app = express()
const port = process.env.PORT || "8000";
app.get("/", (req, res) => {
    res.status(200).send("HNG TASK 2 for udayfah");
  });
app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  });

