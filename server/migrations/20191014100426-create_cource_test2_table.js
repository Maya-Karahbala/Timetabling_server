'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.createTable('Cource', {
         
         id:{
          type:Sequelize.INTEGER(11),
          allowNull:false,
          autoIncrement:true,
          primaryKey:true
        },
       name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        duration: Sequelize.STRING,
         
        createdAt:Sequelize.DATE,
        updatedAt:Sequelize.DATE 
        });
    
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.dropTable('Cource');
    
  }
};
