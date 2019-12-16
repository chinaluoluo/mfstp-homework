const Sequelize = require('sequelize');
const Model = Sequelize.Model;
// const student = require('./models/student')(SequelizeInstance, Sequelize);

const sequelize = new Sequelize('school', 'root', '262835', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});
const student = sequelize.import('./models/student')
const clazz = sequelize.import('./models/class')
const teacher = sequelize.import('./models/teacher')
const degree = sequelize.import('./models/degree')
student.hasMany(degree, { foreignKey: 'Sno', sourceKey: 'Sno' });
sequelize.query("select avg(Degree), student.Sname from degree,student WHERE student.Sno=degree.Sno AND degree.Sno IN (select degree.Sno from degree,student where degree.Sno=student.Sno AND student.Class='95033') group by degree.Sno order by avg(Degree) desc LIMIT 1").then(res => {
    console.log(res);
})

teacher.hasMany(clazz, { foreignKey: 'Tno', sourceKey: 'Tno' });
clazz.findAll({
    raw: true,
    attributes: ['*'],
    include: [{
        attributes: ['*'],
        model: teacher,
        required: true,
    }]
}).then(res => {
    console.log(res)
});

student.findAll({
    raw: true,
    attributes: ['*'],
    where: {
        Ssex: '男'
    }

}).then(res => {
    console.log(res)
});