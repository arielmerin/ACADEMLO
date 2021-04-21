"use strict";

// Obtener acceso a un elemento de la pagina web

const users = [
    {
        name: 'Erik',
        age: 29,
        email: 'erik@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/erik' },
            { name: 'twitter', url: 'twitter/erik' }
        ],
        gender: 'Male'
    },
    {
        name: 'Georg',
        age: 33,
        email: 'georg@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/georg' },
            { name: 'twitter', url: 'twitter/georg' }
        ],
        gender: 'Male'
    },
    {
        name: 'Andrea',
        age: 42,
        email: 'andrea@hotmail.com',
        social: [
            { name: 'facebook', url: 'facebook/andrea' },
            { name: 'twitter', url: 'twitter/andrea' }
        ],
        gender: 'Female'
    },
    {
        name: 'Oscar',
        age: 31,
        email: 'oscar@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/oscar' },
            { name: 'twitter', url: 'twiter/oscar' }
        ],
        gender: 'Male'
    },
    {
        name: 'Daniela',
        age: 22,
        email: 'andrea@uaq.mx',
        social: [
            { name: 'facebook', url: 'facebook/andrea' },
            { name: 'twitter', url: 'twitter/andrea' }
        ],
        gender: 'Female'
    },
    {
        name: 'Ariel',
        age: 19,
        email: 'ariel@merino.mx',
        social: [
            { name: 'facebook', url: 'facebook/ari' },
            { name: 'twitter', url: 'twitter/ari' }
        ],
        gender: 'Male'
    },
]




const container = document.getElementById("container");
// Obtener el contenido del elemento que está seleccionado
// console.log(container.innerHTML);
// container.innerHTML = '<h1>Hola manita</h1>';

console.log(container.innerHTML);

function printUsers(usersData){
    const container = document.getElementById("data-container");
    for (let i = 0; i < usersData.length; i++){
        const tableRow = '<tr><td>' + usersData[i].name + '</td><td>' + usersData[i].email +'</td></tr>';
        container.innerHTML += tableRow
    }
}

function filterAge(minAge, maxAge, data){
    const validUsers = []
    for (let i = 0; i < data.length; i++){
        if (data[i].age > minAge && data[i].age < maxAge){
            validUsers.push(data[i])
        }
    }
    return validUsers
}

function printByEnd(endPhrase, data){
    const validUsers = []
    for (let i = 0; i < data.length; i++){
        if (data[i].email.endsWith(endPhrase)){
            validUsers.push(data[i])
        }
    }
    return validUsers
}


function printCompleteUsers(usersData){
    const container = document.getElementById("complete-data-container");
    for (let i = 0; i < usersData.length; i++){
        const tableRow = '<tr><td>' + usersData[i].name + '</td><td>' + usersData[i].email +'</td><td>' + usersData[i].social[0].url + '</td><td>' + usersData[i].social[1].url + '</td><td>' + usersData[i].gender +'</td></tr>' ;
        container.innerHTML += tableRow
    }
}

printUsers(printByEnd("academlo.com",users))
printUsers(filterAge(20,40,users))
printCompleteUsers(users)


