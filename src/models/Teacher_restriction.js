/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TeacherRestriction', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		startingHour: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'starting_hour'
		},
		duration: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'duration'
		},
		teacherId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'Teacher',
				key: 'id'
			},
			field: 'Teacher_id'
		},
		semesterId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'Semester',
				key: 'id'
			},
			field: 'Semester_id'
		}
	}, {
		tableName: 'Teacher_restriction',
		timestamps: false
	});
};
