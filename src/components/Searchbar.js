import { useState } from 'react'
import './Searchbar.css'
import { useNavigate } from 'react-router-dom'

export default function Searchbar() {

    const [term,setTerm] = useState('')
    const navigate = useNavigate()

    const handelSubmit = (e)=>{
        e.preventDefault()
        navigate(`/Serch?q=${term}`)
    }

  return (
    <div className='Searchbar' >
        <form onSubmit={handelSubmit}>
            <label>
                <span>search: </span>
                <input
                 type='text'
                 onChange={(e) => setTerm(e.target.value)}
                 required
                />
            </label>
        </form>
    </div>
  )
}
