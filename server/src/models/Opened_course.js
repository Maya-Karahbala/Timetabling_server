/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('OpenedCourse', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		semesterId: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'Semester',
				key: 'id'
			},
			field: 'Semester_id'
		},
		departmentCourseId: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'Department_course',
				key: 'id'
			},
			field: 'Department_course_id'
		}
	}, {
		tableName: 'Opened_course',timestamps: false
	});
};
