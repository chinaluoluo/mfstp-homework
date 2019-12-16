/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('student', {
        Sno: {
            type: DataTypes.INTEGER(3),
            allowNull: false,
            primaryKey: true
        },
        Sname: {
            type: DataTypes.CHAR(8),
            allowNull: false
        },
        Ssex: {
            type: DataTypes.CHAR(2),
            allowNull: false
        },
        Sbirthday: {
            type: DataTypes.DATE,
            allowNull: true
        },
        Class: {
            type: DataTypes.CHAR(5),
            allowNull: true
        }
    }, {
        timestamps: false,
        tableName: 'student'
    });
};