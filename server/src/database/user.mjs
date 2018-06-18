export default function createUserModel(sequelize, DataTypes) {
  const User = sequelize.define('user', {
    name: DataTypes.STRING,
    email: { type: DataTypes.STRING, unique: true },
    password: DataTypes.STRING,
  });

  User.associate = function (models) {
    User.hasMany(models.token);
    User.hasMany(models.post);
  };

  return User;
}
