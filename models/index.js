const User = require('./user.js');
const Post = require('./post.js');
const Comment = require('./comment.js');

User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
});


Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'Cascade'
});

Comment.belongsTo(Post, {
foreignKey: 'Post_id'
})

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Post, Comment };