require("dotenv").config({ path: `${__dirname}/../../../.env` });
const sequelize = require("../../models");

async function run() {
  // You can use authenticate() to test the database connection
  await sequelize.authenticate();

  try {
    await sequelize.models.tag.destroy({ cascade: true, truncate: true });
    await sequelize.models.source.destroy({ cascade: true, truncate: true });
    await sequelize.models.article.destroy({ cascade: true, truncate: true });
    await sequelize.models.comment.destroy({ cascade: true, truncate: true });
  } catch (error) {
    console.log(error);
  }
}

run().then(() => {
  console.log("I completed destroy tables");
  sequelize.close();
});
