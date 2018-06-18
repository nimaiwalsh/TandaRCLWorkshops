export default function createPostModel(sequelize, DataTypes) {
  const Post = sequelize.define('post', {});

  Post.associate = function(models) {
    Post.belongsTo(models.user);
  };

  return Post;
}
