/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Department', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		faculty: {
			type: DataTypes.STRING(45),
			allowNull: true,
			field: 'faculty'
		},
		name: {
			type: DataTypes.STRING(45),
			allowNull: false,
			field: 'name'
		}
	}, {
		tableName: 'Department'
	});
};
