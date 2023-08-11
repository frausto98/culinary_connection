const User = require('./User');
const Ingredient = require('./Ingredient');
const Recipe = require('./Recipe');
const Steps = require('./Steps');

Recipe.belongsTo(User, {
    foreignKey: 'user_id',
});

User.hasMany(Recipe, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Ingredient.belongsToMany(Recipe, {
    through: 'recipe_ingredient',
});

Recipe.hasMany(Ingredient, {
    foreignKey: 'recipe_id',
    onDelete: 'CASCADE'
});

Steps.belongsTo(Recipe, {
    foreignKey: 'recipe_id',
});

Recipe.hasMany(Steps, {
    foreignKey: 'recipe_id',
    onDelete: 'CASCADE'
});

module.exports = { User, Ingredient, Recipe, Steps };