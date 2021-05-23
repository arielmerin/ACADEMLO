// function getInputValues(){
//     const inputs = document.getElementsByTagName('input')
//     for (let i = 0; i < inputs.length; i++){
//         if(inputs[i].checked){
//             console.log(inputs[i].value)
//         }
//     }
// }


// function getInputsWithClases(){
//     const inputs = document.getElementsByClassName('input')
//     console.log(inputs)
// }


//Query Selector
const inputs = document.querySelectorAll('input');
console.log(inputs)


const form = document.getElementById('form-2')
const x = form.querySelectorAll('input')

console.log(x)