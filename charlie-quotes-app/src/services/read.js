const baseURL = 'https://prof-quotes.herokuapp.com/api/'


const read = () =>{
    const promise = fetch(`${baseURL}quotes`)
    return promise.then(resolve =>resolve.json())
}

export default read