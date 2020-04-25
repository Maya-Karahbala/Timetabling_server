/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('EventTeacher', {
		eventId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'Opened_course_event',
				key: 'id'
			},
			field: 'Event_id'
		},
		dapartmentTeacherId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'Department_Teacher',
				key: 'id'
			},
			field: 'Dapartment_Teacher_id'
		},
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		}
	
	}, {
		tableName: 'Event_teacher'
	});
};
