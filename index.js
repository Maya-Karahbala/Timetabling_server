const express = require("express");
const cors = require("cors");
const app = express();

require("./src/database/connection");
const b=require("./src/bootstrap");
b()
app.use(cors());
// used to resive complacted strucred body requests
app.use(
  express.json({
    type: ["application/json", "text/plain"]
  })
);

// sequelize models

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
const Event_teacher = require("./src/models/Event_teacher")(
  sequelize,
  Sequelize
);
const Opened_course = require("./src/models/Opened_course")(
  sequelize,
  Sequelize
);

const Semester = require("./src/models/Semester")(sequelize, Sequelize);
const Teacher = require("./src/models/Teacher")(sequelize, Sequelize);
const User = require("./src/models/User")(sequelize, Sequelize);
const Department_User = require("./src/models/Department_User")(
  sequelize,
  Sequelize
);
const Timetable = require("./src/models/Timetable")(sequelize, Sequelize);
////////////////////////////////////////////////////////////////////////////////////////////////////////////
// sequelize model relations
Department.hasMany(Classroom, {
  as: "Classrooms",
  foreignKey: "departmentId"
});
Classroom.belongsTo(Department, {
  as: "Department",
  foreignKey: "departmentId"
});
// semester has many timetabels
Semester.hasMany(Timetable, {
  as: "Timetables",
  foreignKey: "semesterId"
});
Timetable.belongsTo(Semester, {
  as: "Semester",
  foreignKey: "semesterId"
});
// timetable has many event
Timetable.hasMany(Opened_course_event, {
  as: "Opened_course_events",
  foreignKey: "timetableId"
});
Opened_course_event.belongsTo(Timetable, {
  as: "Timetable",
  foreignKey: "timetableId"
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

// department user has many to many relation
Department.belongsToMany(User, {
  through: "Department_user",
  foreignKey: "departmentId",
  as: "Users"
});
User.belongsToMany(Department, {
  through: "Department_user",
  foreignKey: "userId",
  as: "Departments"
});
Department_User.belongsTo(Department, {
  as: "Department",
  foreignKey: "departmentId"
});
Department_User.belongsTo(User, {
  as: "User",
  foreignKey: "userId"
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// servises
app.get("/", (req, res) => {
  res.send("hello from the server");
});

app.get("/users/:depid?", (req, res) => {
  Department.findByPk(req.params.depid, { include: ["Users"] })
    .then(department => {
      res.send(department.get().Users);
    })
    .catch(err => console.log("Error while searching dep : ", err));
});
app.get("/courses/:depid?", (req, res) => {
  Department_course.findAll({
    where: {
      departmentId: req.params.depid
    },
    include: [
      {
        model: Course,
        as: "Course"
      },
      {
        model: Opened_course,
        as: "Opened_courses"
      }
    ]
  })

    .then(c => {
      res.send(c);
      console.log(c);
    })
    .catch(err => console.log("Error : ", err));
});
app.get("/classrooms/:depid?", (req, res) => {
  Classroom.findAll(
    
    {
      order: [ ['id', 'DESC'] ],
    raw: true
  })
    .then(u => res.send(u))
    .catch(err => console.log("Error : ", err));
}) /
  /*
app.get("/teachers",(req,res)=>{
  Teacher.findAll({
      raw: true 
   }).then(u=>res.send(u))

}
)*/
  app.get("/teachers/:depid?", (req, res) => {
    Department.findByPk(req.params.depid, { order: [ ['id', 'DESC'] ], include: ["Teachers"] })
      .then(department => {
        res.send(department.get().Teachers);
      })
      .catch(err => console.log("Error while searching dep : ", err));
  });
// çalışmadı
/*
app.get("/courses/:depid?",(req,res)=>{
  Department.findByPk(req.params.depid,
     {include:      
      ['Teachers']})
  .then((department) => {
    res.send(department.get().Teachers)
  })
  .catch((err) => console.log("Error while searching dep : ", err))
})*/

 /* with transictions
app.put("/updatecourses", async function(req, res) {
//const t= await sequelize.transaction()
let t = await sequelize.transaction({autocommit:false});

  let r = await req.body.map(data => {
    console.log("dataaaaaaa",data)
    Opened_course_event.update(data.changedData, { where: { id: data.id } ,transaction:t});
 
      Opened_course_event.findOne({ where: { id: data.id } }).then(evt => {
        data.classrooms.map(classroom => {
          evt.createEvent_classroom( { classroomId: classroom.id }, { transaction: t })
        });
        data.teachers.map( teacher=>{
          evt.createEvent_teacher({  dapartmentTeacherId: teacher.dapartmentTeacherId }, { transaction: t })
         
        })

      });
      data.deletedClassrooms.map( classroom=>{
        Event_classroom.destroy({ where: { eventId: data.id, classroomId: classroom.id } ,transaction:t} )
       
      })

      // teachers
      data.deletedTeachers.map( teacher=>{
        Event_teacher.destroy({ where: { eventId: data.id, dapartmentTeacherId: teacher.dapartmentTeacherId  },transaction:t} )
       
      })
       
      /*t.commit()
      .then(result=> console.log(result))*//*
  });
      await  t.commit()
      res.send()
});

*/

// with promis.all
/*
app.put("/updatecourses", async function(req, res,next) {
  //const t= await sequelize.transaction()

  let promises=[]

     result=await req.body.map(async data => {
      
       await Opened_course_event.update(data.changedData, { where: { id: data.id } })
       .then(result=>promises.push(result))
    
      Opened_course_event.findOne({ where: { id: data.id } }).then(async evt => {
          data.classrooms.map(async classroom => {
            await evt.createEvent_classroom( { classroomId: classroom.id })
            .then(result=>promises.push(result))
           
          });
       
         
        await  data.teachers.map( async teacher=>{
          await evt.createEvent_teacher({  dapartmentTeacherId: teacher.dapartmentTeacherId })
          .then(result=>promises.push(result))
            
          })
          await data.deletedClassrooms.map(async  classroom=>{
             await Event_classroom.destroy({ where: { eventId: data.id, classroomId: classroom.id } } )
             .then(result=>promises.push(result))
          
        })
      
        // teachers
       await data.deletedTeachers.map( async teacher=>{
         await  Event_teacher.destroy({ where: { eventId: data.id, dapartmentTeacherId: teacher.dapartmentTeacherId  }} )
         .then(result=>promises.push(result))
        
        })


})
        console.log("promises length",promises.length)
        
        console.log("promises",promises)
        });
      
        Promise.all(promises).then((result)=>{
          res.send(result)
        
        
    })
    
        
  });
  
  */
 app.put("/updatecourses", async function(req, res,next) {
  //const t= await sequelize.transaction()

  let promises=[]

     result=await req.body.map(async data => {
      
       await Opened_course_event.update(data.changedData, { where: { id: data.id } })
       .then(result=>promises.push(result))
    
      Opened_course_event.findOne({ where: { id: data.id } }).then(async evt => {
          data.classrooms.map(async classroom => {
            await evt.createEvent_classroom( { classroomId: classroom.id })
            .then(result=>promises.push(result))
           
          });
       
         
        await  data.teachers.map( async teacher=>{
          await evt.createEvent_teacher({  dapartmentTeacherId: teacher.dapartmentTeacherId })
          .then(result=>promises.push(result))
            
          })
          await data.deletedClassrooms.map(async  classroom=>{
             await Event_classroom.destroy({ where: { eventId: data.id, classroomId: classroom.id } } )
             .then(result=>promises.push(result))
          
        })
      
        // teachers
       await data.deletedTeachers.map( async teacher=>{
         await  Event_teacher.destroy({ where: { eventId: data.id, dapartmentTeacherId: teacher.dapartmentTeacherId  }} )
         .then(result=>promises.push(result))
        
        })


})
        console.log("promises length",promises.length)
        
        console.log("promises",promises)
        });
      
        Promise.all(promises).then((result)=>{
          res.send(result)
        
        
    })
    
        
  });
  
  



/* 
app.put("/updatecourses", function(req, res) {
  req.body.map(data => {
    Opened_course_event.update(data.changedData, { where: { id: data.id } });
  });
  if (data.classrooms.size != 0) {
    Opened_course_event.findOne({ where: { id: data.id } }).then(evt => {
      data.classrooms.map(classroom => {
        evt.createEvent_classroom({ classroomId: classroom.id });
      });
    });
  }
  if (data.deletedClassrooms.size != 0) {
    data.deletedClassrooms.map(classroom => {
      Event_classroom.destroy({
        where: { eventId: data.id, classroomId: classroom.id }
      });
    });
  }
});
*/





//  Event_classroom.create({classroomId: classroom.id}).then(evtClassroom=>{
//    console.log("created evt classroom" , evtClassroom)
//   evt.setEvent_classroom(evtClassroom)
// })
app.get("/openedCoursesEvents/:semesterid?/:depid?", (req, res) => {
  console.log(
    "--------------------------",
    req.params.depid,
    " ",
    req.params.semesterid
  );
  let condition =
    req.params.depid === undefined ? {} : { departmentId: req.params.depid };
  Opened_course_event.findAll({
    order: [ ['eventDate', 'DESC'] ],
 
    attributes: [
      "id",
      "eventType",
      "duration",
      "startingHour",
      "studentNumber",
      "timetableId",
      "eventDate"
    ],
    include: [
      {
        model: Opened_course,
        as: "Opened_course",
        where: { semesterId: req.params.semesterid },
        include: [
          {
            model: Department_course,
            as: "Department_course",
            where: condition,
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
       
          console.log("1111111111111111111111111111111111",evt)
          let e = evt.toJSON();
          console.log(e);
        }
      });
      res.send(r);
    })
    .catch(err => console.log("Error while searching dep : ", err));
});
app.get("/departments", (req, res) => {
  Department.findAll({
    raw: true
  }).then(u => res.send(u));
});

app.post("/addSemester", (req, res) => {
  console.log("req.body", req.body);
  Semester.create(req.body.semester)
    .then(semester => {
      semester.createTimetable(req.body.timetable);
      console.log(semester.dataValues);
      res.send(semester.dataValues);
    })
    .catch(err => {
      console.log("error ", err);
    });
});
app.post("/addTimetable", (req, res) => {
  Timetable.create(req.body.timetable)
    .then(timetable => {
      res.send(timetable.dataValues);
    })
    .catch(err => {
      console.log("error ", err);
    });
});

app.get("/semesters/:depid?", (req, res) => {
  Semester.findAll({
    include: [
      {
        model: Timetable,
        as: "Timetables"
      }
    ]
  })
    .then(u => res.send(u))
    .catch(err => console.log("Error : ", err));
});
// adding course events
app.post("/addOpendCourse", (req, res) => {
  console.log("req.body", req.body);

  Opened_course.create(req.body.opened_course)
    .then(opened_course => {
      console.log(opened_course.dataValues);
      res.send(opened_course.dataValues);
    })
    .catch(err => {
      console.log("error ", err);
    });
});

app.post("/addEvent", (req, res) => {
  //req.body.courseEvent.timetableId=1
  console.log(
    "req.body***********************************************",
    req.body
  );
  Opened_course_event.create(req.body.courseEvent)
    .then(courseEvent => {
      console.log(courseEvent.dataValues);
      res.send(courseEvent.dataValues);
    })
    .catch(err => {
      console.log("error ", err);
    });
});

app.post("/addEventClassroom", (req, res) => {
  console.log(
    "req.body***********************************************",
    req.body
  );
  Event_classroom.create(req.body.evtClassroom)
    .then(evtClassroom => {
      console.log(evtClassroom.dataValues);
      res.send(evtClassroom.dataValues);
    })
    .catch(err => {
      console.log("error ", err);
    });
});
app.post("/addEventTeacher", (req, res) => {
  console.log(
    "req.body***********************************************",
    req.body
  );
  Event_teacher.create(req.body.evtTeacher)
    .then(evtTeacher => {
      console.log(evtTeacher.dataValues);
      res.send(evtTeacher.dataValues);
    })
    .catch(err => {
      console.log("error ", err);
    });
});

app.get("/deleteSemester/:id?", (req, res) => {
  Semester.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(() => {
      res.send();
    })
    .catch(err => console.log("Error : ", err));
});
app.get("/events", (req, res) => {
  Opened_course_event.findAll({
    raw: true
  }).then(u =>{
    console.log(u)
    res.send(u)
  } );
});
/*
app.put("/updatecourses", function(req, res) {
  req.body.map(data => {
    console.log("dataaaa",data)
    Opened_course_event.update(data.changedData, { where: { id: data.id } });
    
      Opened_course_event.findOne({ where: { id: data.id } }).then(evt => {
        addEventTeachers(data.classrooms,evt)
      })
        //evt.setEvent_classrooms([])./*
       /* Opened_course_event.findOne({ where: { id: 78 } }).then(evt => {
          evt.getEvent_classrooms().then(r=> {
            r.map(ev=> Event_teacher.destroy({where: { id: ev.id }}))
          })
      }).
        then(
          ()=> {
          
            data.classrooms.map(classroom => {
              evt.createEvent_classroom( { classroomId: classroom.id })
          });})
    
    }).then((r)=>{ return r})*/
    /*
  
  })
  })
  */

app.listen(3004, () => {
  console.log("server is listening");
});


/*
  addEventTeachers=(classrooms, evt)=> {
   console.log("classroosssssssms",classrooms)
  let evtClasrroms=[]
  classrooms.map(classroom=>{
     Event_classroom.create({ classroomId: classroom.id }).then(temp=>{
      evtClasrroms.push(temp) ;
     })
    
   
  })
  console.log("evtClasrroms",evtClasrroms)
evt.setEvent_classrooms([ {classroomId:1}])

  }*/
    /*Opened_course_event.findOne({ where: { id: 78 } }).then(evt => {
        evt.setEvent_classrooms([]).then(r=> {
          console.log(r)
          //r.map(ev=> Event_teacher.destroy({where: { id: ev.id }}))
        })
    })*/






