const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Progress extends Model {}

Progress.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        todo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        in_progress: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        complete: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        task_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'task',
                key: 'id'
            }
        },
    },
    {
    sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'progress',
    }
);

module.exports = Progress;