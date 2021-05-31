
const searchGif = query =>{
    const url = `https://api.giphy.com/v1/gifs/search?q=
    ${encodeURI(query)}
    &limit=20
    &api_key=HiDJ77XnFA30d2indZZbFJZyjRwCa6aB`


    return fetch(url).then(res=>res.json())
}

export default searchGif


