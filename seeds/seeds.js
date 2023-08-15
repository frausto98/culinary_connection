const data = require('./seeds.json');
const recipe = require('../models/recipe');
const user = require('../models/user');
const ingredient = require('../models/ingredient');
const steps = require('../models/step');
const savedRecipe = require('../models/SavedRecipe');
const sequelize = require('../config/connection');

const seedData = async () => {
    try {
        await sequelize.query('SET FOREIGN_KEY_CHECKS = 0')
        await sequelize.sync({ force: true });
        await sequelize.query('SET FOREIGN_KEY_CHECKS = 1')
       await user.create(data[0])
       await user.create(data[1])
       await recipe.create(data[2])
       await recipe.create(data[3])
       await recipe.create(data[4])
       await recipe.create(data[5])
       process.exit(0)
    } catch (error) {
        console.log(error)
    }
}

seedData();