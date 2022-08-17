require("dotenv").config({ path: `${__dirname}/../../../.env` });
const sequelize = require("../../models");

async function run() {
  // You can use authenticate() to test the database connection
  await sequelize.authenticate();

  try {
    await sequelize.models.tag.sync({ alter: true });
    await sequelize.models.source.sync({ alter: true });
    await sequelize.models.article.sync({ alter: true });
    await sequelize.models.comment.sync({ alter: true });
  } catch (error) {
    console.log(error);
  }
}

run().then(() => {
  console.log("I completed create tables");
  sequelize.close();
});
