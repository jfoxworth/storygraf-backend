// Sequelize setup example for reference
const { DATABASE_URL } = process.env;

const Sequelize = require("sequelize");

console.log("Connecting...", DATABASE_URL);

const sequelize = new Sequelize(DATABASE_URL, null, null, {
  dialect: "postgres",
});

const modelDefiners = [
  require("./tag"),
  require("./article"),
  require("./comment"),
];

// Define all models
const models = modelDefiners.map((modelDefiner) => modelDefiner(sequelize));

models.forEach((model, i) => {
  console.log(`trying to associate ${i}`);
  // This was never associating because the default export was a FUNCTION and there was no "associate" key in the un-instatiated function
  // I re-worked the code example w/ .map so we keep the instantiated references
  // Once they're instantiated, we can iterate through them to call associate, and it'll actually work...
  if ("associate" in model) {
    console.log("Invoking associate method.");
    // We changed the associate functions to follow Sequalize 6 code example (passing sequalize vs. models)
    model.associate(sequelize);
  }
});

// Export the sequelize connection instance to be used around our app.
module.exports = sequelize;
