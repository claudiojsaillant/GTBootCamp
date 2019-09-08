module.exports = function (sequelize, DataTypes) {
  // Add code here to create a Post model
  // This model needs a title, a body, and a category
  // Don't forget to 'return' the post after defining
  var BlogModel = sequelize.define("model", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: [1, 160]
    },
    body: {
      type: DataTypes.TEXT,
      validate: {
        len: [1]
      },
      min: {
        args: [1],
        msg: "Minimum 1 character required in this input"
      }
    },
    category: {
      type: DataTypes.STRING,
      defaultValue: "Personal"
    }
  })
  return BlogModel;
};
