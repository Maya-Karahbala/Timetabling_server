/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('DepartmentCourse', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		courseId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'Course',
				key: 'id'
			},
			field: 'course_id'
		},
		departmentId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'Department',
				key: 'id'
			},
			field: 'department_id'
		}
	}, {
		tableName: 'Department_course'
	});
};
