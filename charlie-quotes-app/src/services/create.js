
import axios from 'axios'

const baseURL = 'https://prof-quotes.herokuapp.com/api/'

const create = (newQuote) => {

    const promise = axios({
        method: 'POST',
        url: baseURL+ 'quotes',
        data: newQuote,
        }
    )
    return promise
}

export default create