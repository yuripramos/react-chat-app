var app = require("express")();
var http = require("http").createServer(app);

app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

http.listen(3005, () => {
  console.log("listening on *:3005");
});
