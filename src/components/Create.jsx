import React from 'react'
import { useState } from 'react'
import {Navigate, useNavigate} from 'react-router-dom'

    const Create = () => {
        const [apiName, setApi] = useState({})
        const [id, setId] = useState([])
    
    const handleSubmit = (e) => {
        e.preventDefault()
        nav(`/${apiName}/${id}`)

    }
    const nav = useNavigate()
        
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <select onChange={(e) => setApi(e.target.value)}>
                    
                    <h1>search for...</h1>
                    <option type='hidden' value="">Please select</option>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>

                </select>
                
                <input value={apiName.id} type = "number" onChange={(e) => setId(e.target.value)}></input>
                <button type = "submit">RLTW</button>
            </form>

        </div>
    )
    }

    export default Create