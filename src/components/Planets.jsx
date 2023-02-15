import React from 'react'
import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


const Planets = () => {
    const [planets, setPlanets] = useState({})

    const {id} = useParams()

useEffect(()=> {
    axios.get(`https://swapi.dev/api/planets/${id}`)
    .then((res) => { 
        setPlanets(res.data)
        console.log(planets)
    })
    .catch((error)=> console.log(error))
},[id])
return (
    <div>Planets
        <h1>{planets.name}</h1>
        <h1>climate:{planets.climate}</h1>
        <h1>terrain:{planets.terrain}</h1>
        <h1>surface water:{planets.surface_water}</h1>
        <h1>population:{planets.population}</h1>
    </div>
)
}

export default Planets