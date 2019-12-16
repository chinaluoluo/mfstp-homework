/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('class', {
        Cno: {
            type: DataTypes.INTEGER(255),
            allowNull: false,
            primaryKey: true
        },
        Cname: {
            type: DataTypes.STRING(10),
            allowNull: false
        },
        Tno: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            references: {
                model: 'teacher',
                key: 'Tno'
            }
        }
    }, {
        timestamps: false,
        tableName: 'class'
    });
};