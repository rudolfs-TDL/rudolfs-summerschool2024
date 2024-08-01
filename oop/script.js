const Job = require('./Job')
const Person = require('./Person')
let student = new Person('John', 'Smith', 51, 'Janitor', false)
let anotherStudent = new Person('Brian', 'Jones', 41, 'Truck driver', true)
let janitor = new Job('Janitor', 'Mopping floors and cleaning windows 🧹', 500)

student.introduce()
anotherStudent.introduce()
janitor.logJobDescription()
