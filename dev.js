require("dotenv").config();
const app = require("./src/index.js");
const { PORT_NUMBER } = process.env;
const portfinder = require("portfinder");

portfinder.basePort = PORT_NUMBER;


portfinder.getPortPromise().then((port) => {
  app.listen(port);
  console.info(`Listening... http://localhost:${port}`);
});
