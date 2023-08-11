const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Steps extends Model {}

Steps.init(
    {
        id: {
            type:DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        step_number: {
            type:DataTypes.INTEGER,
            allowNull: false,
        },
        step_description: {
            type:DataTypes.STRING,
            allowNull: false,
        },
        recipe_id: {
            type:DataTypes.INTEGER,
            references: {
                model: 'recipe',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'steps',
    }
);

module.exports = Steps;