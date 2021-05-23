function addition(){
    let a = 5;
    let b = 10;
    let c = 20
    let sum = a + b + c;
    console.log(sum)
}

function  subs(){
    let a = 10
    let b = 8
    let substraction = a - b
    console.log(substraction)
}

subs();


function getTasks(){
//    Trae tareas
//    Termino de procesar los datos y los devuelvo ya procesados
    const a = 2
    const b = 4
    const suma = a+b
    return suma
}

function getAttendance(){
    const a = 7
    const b = 12
    return a - b
}

function printData(){
    const result = getTasks();
    const result2 = getAttendance();
    console.log(result, result2)
}

printData();