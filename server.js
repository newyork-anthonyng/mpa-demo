const express = require("express");
const app = express();

const routes = new Map([
  ["home", "/"],
  ["about", "/about"]
]);

const headPartial = `
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Test</title>
  </head>
  <body>
`;

const footPartial = `
  <footer>
    <marquee>Copyright 2019</marquee>
  </footer>
  </body>
</html>
`;

app.get(routes.get("home"), (req, res) => {
  res.write(headPartial);
  res.write(footPartial);
  res.end();
});

app.get(routes.get("about"), (req, res) => {
  res.write(headPartial);
  res.write(`<h1>This is the about page</h1>`);
  res.write(footPartial);
  res.end();
});

const listener = app.listen(3000, () => {
  console.log(`Server listening on ${listener.address().port}`);
});
