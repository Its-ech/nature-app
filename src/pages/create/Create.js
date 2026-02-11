import React, { useState } from 'react'
import './Create.css'


export default function Create() {
    const[name,setName] = useState('')
    const[description, setDescription] = useState('')
    const[benefits, setBenefits] = useState('')
    const[equipment, setEquipment] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault()
        
    }
  return (
    <div className='create'>
        <h2 className='add-sport'>ADD New Sport</h2>

        <form onSubmit={handleSubmit}>
            <lable>
                <span>sport Name:</span>
                <input type="text" onChange={(e)=> setName(e.target.value)}
                value={name}
                required
                />
            </lable>

            <lable>
                <span>sport description:</span>
                <textarea type="text" onChange={(e)=> setDescription(e.target.value)}
                value={description}
                required
                />
            </lable>

            <lable>
                <span>sport benefits:</span>
                <input type="text" onChange={(e)=> setBenefits(e.target.value)}
                value={benefits}
                required
                />
            </lable>

            <lable>
                <span>sport equipment:</span>
                <input type="text" onChange={(e)=> setEquipment(e.target.value)}
                value={equipment}
                required
                />
            </lable>
            
            <button className="btn"> submit</button>
        </form>
    </div>
  )
}
