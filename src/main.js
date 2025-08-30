const http = require("http");

const server = http.createServer((req, res) => {
  const data = {
    id: 1,
    title: "hello world",
    description: "this is a description",
  };
  const jsonData = JSON.stringify(data);

  res.writeHead(200, { "content-type": "application/json;charset=utf-8" });

  res.end(JSON.stringify(data));
});

server.listen(3000, () => {
  console.log("server is running on port 3000");
});
