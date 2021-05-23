import User from "./User.js";

export default class Instructor extends User{
    getStudentsAttendance(){
        console.log('Accedemos a la asistencia de los estudiantes')
    }
}