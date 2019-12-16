/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('teacher', {
        Tno: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true
        },
        Tname: {
            type: DataTypes.CHAR(4),
            allowNull: false
        },
        Tsex: {
            type: DataTypes.CHAR(2),
            allowNull: false
        },
        Tbirthday: {
            type: DataTypes.DATE,
            allowNull: true
        },
        Prof: {
            type: DataTypes.CHAR(6),
            allowNull: true
        },
        Depart: {
            type: DataTypes.STRING(10),
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: 'teacher'
    });
};