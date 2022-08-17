require("dotenv").config({ path: `${__dirname}/../../../.env` });
const sequelize = require("../../models");

async function run() {
  // You can use authenticate() to test the database connection
  await sequelize.authenticate();

  try {
    await sequelize.models.tag.drop();
    await sequelize.models.source.drop();
    await sequelize.models.article.drop();
    await sequelize.models.comment.drop();
  } catch (error) {
    console.log(error);
  }
}

run().then(() => {
  console.log("I completed drop tables");
  sequelize.close();
});
