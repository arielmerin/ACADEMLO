import User from "./User.js";

export default class Student extends User{
    constructor(name, email, paymentMethod) {
        super(name, email);
        this.paymentMethod = paymentMethod
    }
    getHistoryPayments(){
        console.log(`accedemos el historial de pagos de ${this.name} `)
    }
}