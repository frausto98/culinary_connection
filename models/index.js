const User = require('./User');
const Ingredient = require('./Ingredient');
const Recipe = require('./Recipe');

Recipe.belongsTo(User, {
    foreignKey: 'user_id',
});

User.hasMany(Recipe, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Ingredient.belongsTo(Recipe, {
    foreignKey: 'recipe_id',
});

Recipe.hasMany(Ingredient, {
    foreignKey: 'recipe_id',
    onDelete: 'CASCADE'
});

module.exports = { User, Ingredient, Recipe };