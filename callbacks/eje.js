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
        name: 'Marcelo',
        age: 32,
        email: 'merce@gmail.mx',
        social: [
            { name: 'facebook', url: 'facebook/marce' },
            { name: 'twitter', url: 'twitter/marce' }
        ],
        gender: 'Male'
    },
    {
        name: 'Paco',
        age: 26,
        email: 'franko@gotmail.mx',
        social: [
            { name: 'facebook', url: 'facebook/pako' },
            { name: 'twitter', url: 'twitter/pako' }
        ],
        gender: 'Male'
    },
    {
        name: 'Brenda',
        age: 58,
        email: 'brenda@apoi.mx',
        social: [
            { name: 'facebook', url: 'facebook/bren' },
            { name: 'twitter', url: 'twitter/bren' }
        ],
        gender: 'Female'
    },
    {
        name: 'Camila',
        age: 20,
        email: 'cami@camila.fr',
        social: [
            { name: 'facebook', url: 'facebook/camle' },
            { name: 'twitter', url: 'twitter/camile' }
        ],
        gender: 'Female'
    },
    {
        name: 'Jesus',
        age: 19,
        email: 'escobedo@mal.mx',
        social: [
            { name: 'facebook', url: 'facebook/sotomayor' },
            { name: 'twitter', url: 'twitter/sotomayor' }
        ],
        gender: 'Male'
    },
    {
        name: 'Carmem',
        age: 18,
        email: 'car00@men.com',
        social: [
            { name: 'facebook', url: 'facebook/camr' },
            { name: 'twitter', url: 'twitter/camr' }
        ],
        gender: 'Female'
    },
    {
        name: 'Goyo',
        age: 86,
        email: 'joyo@sesg.gx',
        social: [
            { name: 'facebook', url: 'facebook/yoio' },
            { name: 'twitter', url: 'twitter/yoio' }
        ],
        gender: 'Male'
    },
    {
        name: 'Sio',
        age: 32,
        email: 'Sio@sea.com.mx',
        social: [
            { name: 'facebook', url: 'facebook/est' },
            { name: 'twitter', url: 'twitter/est' }
        ],
        gender: 'Female'
    },
]

function each(array, colbac){
    for(let i = 0; i < array.length; i++){
        const elemento = array[i]
        colbac(elemento);
    }
}

function printUser(elemento){
    let container = document.getElementById("data-container");
    container.innerHTML += `<tr>
        <td>${elemento.name}</td>
        <td>${elemento.age}</td>
        <td>${elemento.email}</td>
        <td>${elemento.gender}</td>
    </tr>`;
}

function filterEmail(usuario){
    if(usuario.email.endsWith('academlo.com')){
        printUser(usuario)
    }
}

function filterAge(user){
    if(user.age > 20 && user.age < 40 ){
        printUser(user)
    }
}


each(users, filterAge)
each(users, filterEmail)
each(users, printUser)




