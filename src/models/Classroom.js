/* jshint indent: 1 */
'use strict';

module.exports = function(sequelize, DataTypes) {
	const Classroom= sequelize.define('Classroom', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		classroomType: {
			type: DataTypes.STRING(45),
			allowNull: true,
			field: 'classroom_type'
		},
		code: {
			type: DataTypes.STRING(45),
			allowNull: false,
			unique: true,
			field: 'code'
		},
		campus: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'campus'
		},
		capacity: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'capacity'
		},
		departmentId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'Department',
				key: 'id'
			},
			field: 'Department_id'
		}
	}, {
		tableName: 'Classroom',timestamps: false
	});
	/*Classroom.associate = function (models) {
		Classroom.belongsTo(Department, {foreignKey: 'departmentId', as: 'Department'});
	  };*/
	return Classroom
};

