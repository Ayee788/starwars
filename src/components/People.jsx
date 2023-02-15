    import React from 'react'
    import {useEffect, useState} from 'react'
    import { useParams } from 'react-router-dom'
    import axios from 'axios'


    const People = () => {
        const [people, setPeople] = useState({})
    
        const {id} = useParams()
    
    useEffect(()=> {
        axios.get(`https://swapi.dev/api/people/${id}`)
        .then((res) => { 
            setPeople(res.data)
            console.log(people)
        })
        .catch((error)=> console.log(error))
    },[id])
    return (
        <div>
            <h1>{people.name}</h1>
            <h1>height:{people.height}</h1>
            <h1>mass:{people.mass}</h1>
            <h1>hair color:{people.hair_color}</h1>
            <h1>skin color:{people.skin_color}</h1>
        </div>
    )
    }

    export default People