const User = require('./User');
const Ingredient = require('./Ingredient');
const Recipe = require('./Recipe');
const Steps = require('./Step');
const SavedRecipe = require('./SavedRecipe');

Recipe.belongsTo(User, {
    foreignKey: 'user_id',
});

User.hasMany(Recipe, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

SavedRecipe.belongsTo(User, {
    foreignKey: 'user_id',
});

User.hasMany(SavedRecipe, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Recipe.hasMany(Ingredient, {
    foreignKey: 'recipe_id',
    onDelete: 'CASCADE'
});

Ingredient.belongsTo(Recipe, {
    foreignKey: 'recipe_id',
});

Steps.belongsTo(Recipe, {
    foreignKey: 'recipe_id',
});

Recipe.hasMany(Steps, {
    foreignKey: 'recipe_id',
    onDelete: 'CASCADE'
});

module.exports = { User, Ingredient, Recipe, Steps };