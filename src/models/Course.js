/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Course', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		name: {
			type: DataTypes.STRING(150),
			allowNull: false,
			field: 'name'
		},
		
		code: {
			type: DataTypes.STRING(45),
			allowNull: false,
			unique: true,
			field: 'code'
		},

		courceType: {
			type: DataTypes.STRING(45),
			allowNull: true,
			field: 'cource_type'
		}
	}, {
		tableName: 'Course'
	});
};
