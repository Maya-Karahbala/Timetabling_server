const Sequelize= require("sequelize")


const sequelize=new Sequelize("test4","root","123",{
    host: "127.0.0.1",
    dialect: "mysql",
    define: {
        timestamps: false
    }
    //operatorsAliases: false
})
//sequelize will be used to init all modules so we need to make it global
module.exports=sequelize
global.sequelize=sequelize
