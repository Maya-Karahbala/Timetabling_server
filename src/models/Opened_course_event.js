


module.exports = function(sequelize, DataTypes) {
	return sequelize.define('OpenedCourseEvent', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		eventType: {
			type: DataTypes.STRING(45),
			allowNull: true,
			field: 'event_type'
		},
		duration: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'duration'
		},
		startingHour: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'starting_hour'
		},
		eventDate: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'event_date'
		},
		studentNumber: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'student_number'
		},
		openedCourseId: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'Opened_course',
				key: 'id'
			},
			field: 'Opened_course_id'
		},
		timetableId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'Timetable',
				key: 'id'
			},
			field: 'timetable_id'
		}
	}, {
		tableName: 'Opened_course_event',
		timestamps: false
	});
};
