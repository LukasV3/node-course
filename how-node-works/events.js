const EventEmitter = require("events");
const http = require("http");

const myEmitter = new EventEmitter();

myEmitter.on("newSale", () => {
  console.log("There was a new sale");
});

myEmitter.on("newSale", () => {
  console.log("customer name: Lukas");
});

myEmitter.on("newSale", (stock) => {
  console.log(`There are now ${stock} items left in stock.`);
});

myEmitter.emit("newSale", 9);

/////////////////////////////////

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("Request recieved");
  res.end("Request recieved");
});

server.on("request", (req, res) => {
  console.log("Another request");
});

server.on("close", (req, res) => {
  console.log("Server closed");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Waiting for requests...");
});
