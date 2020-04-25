/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Timetable', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		semesterId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'Semester',
				key: 'id'
			},
			field: 'semester_id'
		},
		timetableType: {
			type: DataTypes.STRING(45),
			allowNull: false,
			field: 'timetable_type'
		},
		beginning: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'beginning'
		},
		ending: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'ending'
		}
	}, {
		tableName: 'Timetable',
		timestamps: false
	});
};
