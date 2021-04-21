export default class User{
    constructor(name, email) {
        this.name = name
        this.email = email
    }
    saludar(){
        console.log(`Hola, mi nombre es ${this.name}`)
    }
}

