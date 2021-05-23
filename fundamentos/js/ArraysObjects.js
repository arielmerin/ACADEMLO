const ariel = {
    email: 'arielmerino@ciencias.unam.mx',
    age: 30
}

const students = [
    {
        email: 'arielito@gmail.com',
        age: 19
    },
    {
        email: 'Merino@gmail.com',
        age: 20
    }
]

console.log(students[0].age)
console.log(students[1].age)


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
]

console.log('Tiene estas posiciones: ', users.length)

const emails = [users[0].email, users[1].email, users[2].email, users[3].email, users[4].email]

const fbAccount = [users[0].social[0].url, users[1].social[0].url, users[2].social[0].url, users[3].social[0].url, users[4].social[0].url]

console.log(emails)
console.log(fbAccount)


const applicants = [
    {
        email: 'ari@gmail.com',
        accepted: true
    },
    {
        email: 'cri@gmail.com',
        accepted: true
    },
    {
        email: 'pri@gmail.com',
        accepted: false
    },
    {
        email: 'uri@gmail.com',
        accepted: false
    },    {
        email: 'ari@gmail.com',
        accepted: false
    },
]

function sendEmail(applicant){
    if(applicant.accepted){
        console.log('Enviamos un correo de invitación a: ' + applicant.email)
    }else {
        console.log('Enviamos un correo indicando que no fue aceptado: ' + applicant.email)
    }
}

sendEmail(applicants[0]);
sendEmail(applicants[1]);
sendEmail(applicants[2]);
