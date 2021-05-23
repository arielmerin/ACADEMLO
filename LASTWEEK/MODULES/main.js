import users from "./users.js";
import User from "../CLASES/User.js";
import Student from "../CLASES/Student.js";


function printUsers(dataUsers){
    dataUsers.forEach((usuario) =>{
        console.log(usuario)
    })
};


const ariel = new Student("Ariel", "arielmerino@ciencias.unam.mx", 5484842154854);
const jesus = new Student("Jesús", "arielmerino@ciencias.unam.mx");

ariel.saludar()
jesus.getHistoryPayments()

console.log(ariel.paymentMethod)

printUsers(users)