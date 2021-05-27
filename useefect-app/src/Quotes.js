import {useEffect, useState} from 'react';

const Quotes = () =>{
    const [data, setData] = useState([]);

    useEffect(() => {
        const url = 'https://gist.githubusercontent.com/carmandomx/3d7ac5f15af87a587e1d25f5ba96de61/raw/e2d848b87c730a580077de221666343c15b1a243/gistfile1.txt'
        fetch(url)
            .then(response => response.json())
             
            .then((actual) =>{
                setData(actual.quotes)

            })
    }, [])

    useEffect(() => {
        console.log(data)
    }, [data])

    return(
        <div>
            Aquí van las frases
            {console.log(data)}
        </div>
    )
}

export default Quotes