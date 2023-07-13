const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 8050;

app.get("/", (req, res) => {
  let date = new Date();
  let content = date.toUTCString();
  fs.writeFile("./current date-time.txt", content, (err) => {
    if (err) {
      res.send(`Error Occurred: ${err}`);
    } else {
      fs.readFile("./current date-time.txt", "utf-8", (err, data) => {
        if (err) {
          res.send(`Error Occurred in reading : ${err}`);
        } else {
          res.send(data);
        }
      });
    }
  });
});

app.listen(PORT, () => console.log(`Server started in localhost:${PORT}`));
