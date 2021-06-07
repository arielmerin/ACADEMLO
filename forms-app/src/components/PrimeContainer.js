
import {useEffect } from 'react'
import PrimeInfo from "./PrimeInfo";



const PrimesContainer = ({ primes })=>{

    const primeList = primes.map((value, index) =>{
        return <PrimeInfo prime={value.primeInput} date={value.dateDiscover} key={index} />
    })

    return <div>
        {primeList}
    </div>
}

export default PrimesContainer