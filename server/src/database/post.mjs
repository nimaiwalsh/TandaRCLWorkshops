export default function createPostModel(sequelize, DataTypes) {
  const Post = sequelize.define('post', {
    title: DataTypes.STRING,
    body: DataTypes.TEXT,
  });

  Post.associate = function(models) {
    Post.belongsTo(models.user);
  };

  return Post;
}
