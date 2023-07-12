// import models
const User = require('./User');
const Task = require('./Task');
const Progress = require('./Progress');


// 
User.hasMany(Task, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

// 
Task.hasOne(User, {
    foreignKey: 'user_id',
});

// 
User.hasMany(Progress, {
    through: Task,
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

// 
Progress.belongsTo(User, {
    through: Task,
    foreignKey: 'task_id'
});

Task.hasMany(Progress, {
    foreignKey: 'task_id',
})

module.exports = {
    User,
    Task,
    Progress,
};