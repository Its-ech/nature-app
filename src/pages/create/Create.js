import React, { useEffect, useState } from 'react'
import './Create.css'
import { useFetch } from '../../hooks/useFetch'
import { useNavigate } from 'react-router-dom'


export default function Create() {
    const[name,setName] = useState('')
    const[description, setDescription] = useState('')
    const[benefits, setBenefits] = useState('')
    const[equipment, setEquipment] = useState('')
    const navigate = useNavigate ()

    const {postData , data , error} = useFetch('http://localhost:3000/Sports' , 'POST')
    const handleSubmit = (e)=>{
        e.preventDefault()
        postData({name,description,benefits,equipment})
    }

    useEffect(()=> {
        if (data) {
            navigate('/')
        }
    },[data, navigate])

  return (
    <div className='create'>
        <h2 className='add-sport'>ADD New Sport</h2>

        <form onSubmit={handleSubmit}>
            <label>
                <span>sport Name:</span>
                <input type="text" onChange={(e)=> setName(e.target.value)}
                value={name}
                required
                />
            </label>

            <label>
                <span>sport description:</span>
                <textarea type="text" onChange={(e)=> setDescription(e.target.value)}
                value={description}
                required
                />
            </label>

            <label>
                <span>sport benefits:</span>
                <input type="text" onChange={(e)=> setBenefits(e.target.value)}
                value={benefits}
                required
                />
            </label>

            <label>
                <span>sport equipment:</span>
                <input type="text" onChange={(e)=> setEquipment(e.target.value)}
                value={equipment}
                required
                />
            </label>
            
            <button className="btn"> submit</button>
            {error && <p className="error-msg">{error}</p>}
        </form>
    </div>
  )
}
