const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Recipe extends Model { }

Recipe.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        recipe_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        recipe_description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // recipe_steps: {
        //     type:DataTypes.STRING,
        //     allowNull: false,
        // },
        // recipe_steps: {
        //     type:DataTypes.STRING,
        //     allowNull: false,
        // },
        // recipe_ingredients: {
        //     type:DataTypes.STRING,
        //     allowNull: false,
        // },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        //DRY code above foregin keys are referenced in index.js
        //difficulty level
        difficulty_level: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isIn: [['easy', 'medium', 'hard']]
            }
            //add validate that it's either 1, 2, or 3

        },
        // cloudinary: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        // },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'recipe',
    }
);

module.exports = Recipe;