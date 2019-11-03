const express=require("express")
const cors=require("cors")
const app=express()
require("./src/database/connection")

app.use(cors())
app.use(express.json())


//////////////////////////////////////////////////

  const Sequelize = require("sequelize");
  // require models
  const Classroom = require("./src/models/Classroom")(sequelize, Sequelize);
  const Course = require("./src/models/Course")(sequelize, Sequelize);

  const Department_course = require("./src/models/Department_course")(
    sequelize,
    Sequelize
  );
  const Department_Teacher = require("./src/models/Department_Teacher")(
    sequelize,
    Sequelize
  );

  const Department = require("./src/models/Department")(sequelize, Sequelize);

  const Event_classroom = require("./src/models/Event_classroom")(
    sequelize,
    Sequelize
  );
  const Opened_course_event = require("./src/models/Opened_course_event")(
    sequelize,
    Sequelize
  );
  const Event_teacher = require("./src/models/Event_teacher")(sequelize, Sequelize);
  const Opened_course = require("./src/models/Opened_course")(sequelize, Sequelize);

  const Semester = require("./src/models/Semester")(sequelize, Sequelize);
  const Teacher = require("./src/models/Teacher")(sequelize, Sequelize);

  Department.hasMany(Classroom, {
    as: "Classrooms",
    foreignKey: "departmentId"
  });
  Classroom.belongsTo(Department, {
    as: "Department",
    foreignKey: "departmentId"
  });
  // department teacher has many to many relation
  Department.belongsToMany(Teacher, {
    through: "Department_Teacher",
    foreignKey: "departmentId",
    as: "Teachers"
  });
  Teacher.belongsToMany(Department, {
    through: "Department_Teacher",
    foreignKey: "teacherId",
    as: "Departments"
  });
  Department_Teacher.belongsTo(Department, {
    as: "Department",
    foreignKey: "departmentId"
  });
  Department_Teacher.belongsTo(Teacher, {
    as: "Teacher",
    foreignKey: "teacherId"
  });
  // department course has many to many relation  çalışmıyor
  Department.belongsToMany(Course, {
    through: "Department_course",
    foreignKey: "departmentId",
    as: "Courses"
  });
  Course.belongsToMany(Department, {
    through: "Department_course",
    foreignKey: "courseId",
    as: "Departments"
  });

  Department_course.belongsTo(Department, {
    as: "Department",
    foreignKey: "departmentId"
  });
  Department_course.belongsTo(Course, {
    as: "Course",
    foreignKey: "courseId"
  });
  //department course has many opend course
  Department_course.hasMany(Opened_course, {
    as: "Opened_courses",
    foreignKey: "departmentCourseId"
  });
  Opened_course.belongsTo(Department_course, {
    as: "Department_course",
    foreignKey: "departmentCourseId"
  });
  //semester  has many opend course
  Semester.hasMany(Opened_course, {
    as: "Opened_courses",
    foreignKey: "semesterId"
  });
  Opened_course.belongsTo(Semester, {
    as: "Semester",
    foreignKey: "semesterId"
  });
  //opend course   has many OpenedCourseEvent
  Opened_course.hasMany(Opened_course_event, {
    as: "Opened_course_events",
    foreignKey: "openedCourseId"
  });
  Opened_course_event.belongsTo(Opened_course, {
    as: "Opened_course",
    foreignKey: "openedCourseId"
  });

  //Event  has many event teatcher
  Opened_course_event.hasMany(Event_teacher, {
    as: "Event_teachers",
    foreignKey: "eventId"
  });
  Event_teacher.belongsTo(Opened_course_event, {
    as: "Opened_course_event",
    foreignKey: "eventId"
  });

  //Department teacher  has many event teatcher
  Department_Teacher.hasMany(Event_teacher, {
    as: "teacher_events",
    foreignKey: "dapartmentTeacherId"
  });
  /*
  Event_teacher.belongsTo(Department_Teacher, {
    as: "Department_Teacher",
    foreignKey: "dapartmentTeacherId"
  });*/
  //Event  has many event classroom
  Opened_course_event.hasMany(Event_classroom, {
    as: "Event_classrooms",
    foreignKey: "eventId"
  });
  Event_classroom.belongsTo(Opened_course_event, {
    as: "Opened_course_event",
    foreignKey: "eventId"
  });
  //Classroom  has many event classroom
  Classroom.hasMany(Event_classroom, {
    as: "Classroom_events",
    foreignKey: "classroomId"
  });
  Event_classroom.belongsTo(Classroom, {
    as: "Classroom",
    foreignKey: "classroomId"
  });
  //teacher has many dep teacher
  /*
  Department_Teacher.belongsTo(Teacher, {
    as: "Teacher",
    foreignKey: "teacherId"
  });*/
  Event_teacher.belongsTo(Department_Teacher, {
    as: "Department_Teacher",
    foreignKey: "dapartmentTeacherId"
  });

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


app.get("/",(req,res)=>{
  res.send("hello from the server")
}
)
app.get("/teachers",(req,res)=>{
  Teacher.findAll({
      raw: true 
   }).then(u=>res.send(u))

}
)
app.get("/depTeachers",(req,res)=>{
let depId=1
Department.findByPk(depId, {include: ['Teachers']})
.then((department) => {
  let teachers=department.get().Teachers.map(t=>console.log(t.dataValues))
  res.send(teachers)
})
.catch((err) => console.log("Error while searching dep : ", err))

}
)

app.get("/openedCourses",(req,res)=>{


  Opened_course_event.findAll({
    attributes:["id","eventType","duration","startingHour","weekDay"],
     include: [
       {
         model: Opened_course,
         as: "Opened_course", 
         where: { semesterId: 1 },
         include: [
           /*{
             model: Semester,
             as: "Semester",
             // istediğimiz semesterin value
             where: { id: 1 },
             attributes: []
           },*/
           {
             model: Department_course,
             as: "Department_course",
             where: { departmentId: 1 },
             include: ["Course"]
           }
         ]
       },
       {
         model: Event_teacher,
         as: "Event_teachers",
         include: [
           {
             model: Department_Teacher,
             as: "Department_Teacher",
             include: ["Teacher"]
           }
         ]
       },
       {
         model: Event_classroom,
         as: "Event_classrooms",
         include: [
           {
             model: Classroom,
             as: "Classroom"
           }
         ]
       }
     ]
   })
     .then(r => {
    
       r.map(evt => {
         if (evt.get().Opened_course != null) {
           let e = evt.toJSON();
           console.log(e);
          
          
 
         }
       });
       res.send(r)
     })
     .catch(err => console.log("Error while searching dep : ", err));
 
})

app.listen(3004,()=>{
  console.log("server is listening")
}
)

  