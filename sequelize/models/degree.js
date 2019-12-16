/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('degree', {
    Sno: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'student',
        key: 'Sno'
      }
    },
    Cno: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'class',
        key: 'Cno'
      }
    },
    Degree: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    tableName: 'degree'
  });
};
