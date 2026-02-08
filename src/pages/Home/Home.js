import { useFetch } from '../../hooks/useFetch'
import React from 'react'
import './Home.css';


export default function Home() {
  
  const {data,isLoading, error} = useFetch(`http://localhost:3000/Sports`)
  return (
    <div className='home'>
     {error && <p className='error'>{error}</p>}
     {isLoading && <p className='Loading'>{isLoading}</p>}
     {data && data.map( Sport=>(
      <h2 key={Sport.id}>{Sport.name}</h2>
     ))}
    </div>
  )
}
