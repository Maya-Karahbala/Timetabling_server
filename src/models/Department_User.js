/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Department_user', {
		departmentId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'Department',
				key: 'id'
			},
			field: 'Department_id'
		},
		userId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'User',
				key: 'id'
			},
			field: 'User_id'
		},
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		}
	}, {
		tableName: 'Department_user',
		timestamps: false

	});
};
