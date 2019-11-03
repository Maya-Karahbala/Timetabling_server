/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Department_Teacher', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		departmentId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'Department',
				key: 'id'
			},
			field: 'Department_id'
		},
		teacherId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'Teacher',
				key: 'id'
			},
			field: 'Teacher_id'
		}
	}, {
		tableName: 'Department_Teacher',
		timestamps: false
	});
};
