const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Ratings extends Model {}

Ratings.init(
    {
        id: {
            type:DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        rating: {
            type:DataTypes.STRING,
            allowNull: false,
        },
        recipe_id: {
            type:DataTypes.INTEGER,
            references: {
                model: 'recipe',
                key: 'id'
            }
        },
        user_id: {
            type:DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'ratings',
    }
);

module.exports = Ratings;