/* jshint indent: 1 */
'use strict';
module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Teacher', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		firstName: {
			type: DataTypes.STRING(45),
			allowNull: false,
			field: 'first_name'
		},
		lastName: {
			type: DataTypes.STRING(45),
			allowNull: false,
			field: 'last_name'
		},
		title: {
			type: DataTypes.STRING(150),
			allowNull: false,
			field: 'title'
		},
		mail: {
			type: DataTypes.STRING(150),
			allowNull: false,
			unique: true,
			field: 'mail'
		}
	}, {
		tableName: 'Teacher',
		timestamps: false
	});

};

