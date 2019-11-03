module.exports = async () => {
  const Sequelize = require("sequelize");
 
};















  //get department for given teacher

  /*
Teacher.findByPk(3, {include: ['Departments']})
.then((teacher) => {
 teacher.get().Departments.map(d=>console.log(d.get()))
})
.catch((err) => console.log("Error while searching dep : ", err))*/
  //const res = await Department.findAll({where:{id:1},include:[{model:Classroom,as :"Classrooms"}]}).map(el => el.get({ plain: true }))
  /*Department.findAll({where:{id:1},include:[{model:Classroom,as :"Classrooms"}]}).then(

  dep=>console.log(dep)
  //dep=>console.log(dep[0].dataValues.Classrooms[0].dataValues)
)
console.log("girdi---------------------------------------------------------------")
const teacher= await Teacher.create({firstName:"Mehmet",lastName:"Ak",mail:"mAk@gmail.com",title:"prof dr "}).catch(errorHandler)
console.log(teacher.dataValues)*/
  // getting Classrooms of department with id=1
  /*Department.findAll(
  {where:{id:1},raw: true,include:[{model:Classroom,as :"Classrooms"}]}
).then(u=>{
  console.log("----------------------finfd all---------------------------")
  console.log(u)
  

})


Department.findAll(
  {where:{id:1},include:[{model:Classroom,as :"Classrooms"}]}
).then(u=>{
let deps=JSON.stringify(u)
  console.log(deps)
  console.log("-------------------------------------------------")
})
Department.findByPk(1).then(department => {
  console.log("-----------------------find by pk--------------------------")
  console.log(department.dataValues.id)
  // project will be an instance of Project and stores the content of the table entry
  // with id 123. if such an entry is not defined you will get null
})



Department
  .findAndCountAll(
    {where:{id:1},raw: true,include:[{model:Classroom,as :"Classrooms"}]}
  ).then(result => {
    console.log("----------------------find count -------------------")
    console.log(result.count);
    let r=JSON.stringify(result.raws)
    console.log(r);
    for ( var i=0, L=r.length; i<L; i++ ) {
      console.log(r[i])
    }
    
  });*/
  //çalışanlar
  //////////// get classrooms of given department
  /*
 const de=await Department.findAll(
    {where:{id:1},include:[{model:Classroom,as :"Classrooms"}]}
  ).then(res=>{
    console.log("-----------------------get department and classroom of given department --------------------------")
    console.log(res[0].get())
    console.log("-----------------------get classrooms of given department --------------------------")
   let r= res[0].get().Classrooms
    for ( var i=0, L=r.length; i<L; i++ ) {
      console.log(r[i].get())
    }
  }
    )
//equal to last one

   let c= await  Classroom.findAll(
      {where:{departmentId:1}}
    ).then(res=> {
      console.log("-----------------------get classrooms directly--------------------------")
      let r= res
    for ( var i=0, L=r.length; i<L; i++ ) {
      console.log(r[i].get())
    }
     
    })
/////////////,
console.log("-----------------------get classrooms directly2--------------------------")
Classroom.findAll(
  {where:{departmentId:1}})
.then(res2=>console.log(res2.map(i=> console.log(i.get()))))


  /*
  Department.findByPk(1).then(department => {
    console.log("-----------------------find by pk--------------------------")
    console.log(department.get().Classroom.length)
  
  })
  Classroom.findOne({
    where: {id:1}, include: 'Department'
  })
  .then((classroom) => {
   // çalışıyor
    // Get the User with Company datas included
    console.log("-----------------------find one -------------------------")
    console.log(classroom.Department.get())
    // Get the company record only
    // console.log(findedUser.company)
  })
  .catch((err) => {
    console.log("Error while find user : ", err)
  })
  */

  //  Get teachers for a given dep
  /*
Department.findByPk(1, {include: ['Teachers']})
.then((department) => {
  department.get().Teachers.map(t=>console.log(t.dataValues))
})
.catch((err) => console.log("Error while searching dep : ", err))*/
  //Get course for a given dep
  /*
Event_teacher.findAll( {include: ['Opened_course_event']})
.then((department) => {
 console.log(department)
})
.catch((err) => console.log("Errror while searching dep : ", err))
*/
  /*
Event_teacher.findAll({
  raw: true 
})
.then((department) => {
 console.log(department)
})*/
  //general
  /*
Department_course.findByPk(1)
.then((department) => {
 console.log(department)
})
.catch((err) => console.log("Errror while searching dep : ", err))
*/
  /*
DeparOptment.findByPk(1, {include: ['Courses']})
.then((r) => {
 console.log(r)
})
.catch((err) => console.log("Error while searching dep : ", err))
*/
  // 3 tablo iç içe
  /*
Semester.findAll({

  include: [{// Notice `include` takes an ARRAY
    model: Opened_course,
    as:"Opened_courses",
    include:["Opened_course_events"]
  },
]
}).then((r) => {
  console.log(r[0].get().Opened_courses[0])
 })
 .catch((err) => console.log("Error while searching dep : ", err))
 */
  // det some attributes
  /*
Opened_course.findAll({
  attributes: ['id', 'semesterId'],
  where: {id:1},
  
  include: [{// Notice `include` takes an ARRAY
    model: Opened_course_event,
    as:"Opened_course_events",
   
    include:["Event_teachers"]
  },
]
}).then((r) => {
  console.log(r)
 })
 .catch((err) => console.log("Error while searching dep : ", err))
 */