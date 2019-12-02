
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
			allowNull: false,
			field: 'event_type'
		},
		duration: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			field: 'duration'
		},
		startingHour: {
			type: DataTypes.STRING(45),
			allowNull: false,
			field: 'starting_hour'
		},
		eventDate: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'event_date'
		},
		weekDay: {
			type: DataTypes.STRING(45),
			allowNull: true,
			field: 'week_day'
		},
		openedCourseId: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'Opened_course',
				key: 'id'
			},
			field: 'Opened_course_id'
		}
	}, {
		tableName: 'Opened_course_event'
	});
};
