/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Semester', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		semesterType: {
			type: DataTypes.STRING(45),
			allowNull: false,
			field: 'semester_type'
		},
		beginning: {
			type: DataTypes.STRING(45),
			allowNull: true,
			field: 'beginning'
		},
		ending: {
			type: DataTypes.STRING(45),
			allowNull: true,
			field: 'ending'
		}
	}, {
		tableName: 'Semester',
		timestamps: false
	});
};
