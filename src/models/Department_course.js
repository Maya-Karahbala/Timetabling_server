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
		},
		semesterNo: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'semester_no'
		},
		teoriDuration: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'teori_duration'
		},
		labDuration: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'lab_duration'
		},
		classroomType: {
			type: DataTypes.STRING(45),
			allowNull: true,
			field: 'Classroom_type'
		},
		eventType: {
			type: DataTypes.STRING(45),
			allowNull: true,
			field: 'event_type'
		},
	}, {
		tableName: 'Department_course'
	});
};
