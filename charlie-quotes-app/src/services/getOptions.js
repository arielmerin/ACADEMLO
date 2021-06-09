const baseURL = 'https://prof-quotes.herokuapp.com/api/'


const getOptions = () =>{
	const promise = fetch(`${baseURL}quotes/options`)
	return promise.then(resolve =>resolve.json())
}

export default getOptions