const applicants = [
    {
        email: 'uno@gmail.com',
        accepted: true,
        social: [
            {name: 'fb', url: 'https://minus.ccccccom'},
            {name: 'ig', url: 'https://minus.jgd'}
        ]
    },
    {
        email: 'dos@gmail.com',
        accepted: true,
        social: [
            {name: 'fb', url: 'https://zero.ccccccom'},
            {name: 'ig', url: 'https://zero.jgd'}
        ]
    },
    {
        email: 'tres@gmail.com',
        accepted: true,
        social: [
            {name: 'fb', url: 'https://huan.ccccccom'},
            {name: 'ig', url: 'https://huan.jgd'}
        ]
    },
    {
        email: 'cuatro@gmail.com',
        accepted: true,
        social: [
            {name: 'fb', url: 'https://orales.ccccccom'},
            {name: 'ig', url: 'https://omg.jgd'}
        ]
    },
    {
        email: 'cinco@gmail.com',
        accepted: true,
        social: [
            {name: 'fb', url: 'https://trois.ccccccom'},
            {name: 'ig', url: 'https://trois.jgd'}
        ]
    },
    {
        email: 'seis@gmail.com',
        accepted: true,
        social: [
            {name: 'fb', url: 'https://qatro.ccccccom'},
            {name: 'ig', url: 'https://qatro.jgd'}
        ]
    },
    {
        email: 'siete@gmail.com',
        accepted: true,
        social: [
            {name: 'fb', url: 'https://kinko.ccccccom'},
            {name: 'ig', url: 'https://kinko.jgd'}
        ]
    },
    {
        email: 'ocho@gmail.com',
        accepted: true,
        social: [
            {name: 'fb', url: 'https://seis.ccccccom'},
            {name: 'ig', url: 'https://seiss.jgd'}
        ]
    },
]

// no puedo reasignar el valor
// pero sí modificar lo que contiene. omggggg
const emails = []
const social = []
for(let i = 0; i< applicants.length; i++){
    emails.push(applicants[i].email)
    emails.pop()
    for (let j = 0; j < applicants[i].social.length; j++){
        social.push(applicants[i].social[j])
    }
}
console.log(emails)
console.log(social)

// diferencias entre métodos y funciones
// una función que se guarda en un objeto o en una clase = MÉTODO
// Cuando se guarda en una clase es un Método