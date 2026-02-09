import { useFetch } from '../../hooks/useFetch'
import React from 'react'
import './Home.css';
import SportList from '../../components/SportList';


export default function Home() {
  
  const {data,isLoading, error} = useFetch(`http://localhost:3000/Sports`)
  return (
    <div className='home'>
     {error && <p className='error'>{error}</p>}
     {isLoading && <p className='Loading'>{isLoading}</p>}
     {data && <SportList Sports={data}/>}
    </div>
  )
}
