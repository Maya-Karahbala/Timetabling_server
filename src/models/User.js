/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('User', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		firstName: {
			type: DataTypes.STRING(50),
			allowNull: true,
			field: 'first_name'
		},
		lastName: {
			type: DataTypes.STRING(50),
			allowNull: true,
			field: 'last_name'
		},
		mail: {
			type: DataTypes.STRING(254),
			allowNull: false,
			unique: true,
			field: 'mail'
		},
		password: {
			type: DataTypes.STRING(45),
			allowNull: false,
			field: 'password'
		}
	}, {
		tableName: 'User',
		timestamps: false
	});
};
