/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('EventClassroom', {
		classroomId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'Classroom',
				key: 'id'
			},
			field: 'Classroom_id'
		},
		eventId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'Opened_course_event',
				key: 'id'
			},
			field: 'Event_id'
		},
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		}
	}, {
		tableName: 'Event_classroom'
	});
};
