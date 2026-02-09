import {useParams} from 'react-router-dom'
import {useFetch} from './../../hooks/useFetch'

import React from 'react'

export default function Sports() {
  const{ id } = useParams()
  const url ='http://localhost:3000/Sports/'+ id
  const { data:Sport, isLoading,error } = useFetch(url)
  return (
    <div className='sport'>
      {error && <p className='error'>{error}</p>}
      {isLoading && <p className='loading'>loading...</p>}
      {Sport && (
        <>
        <h2 className='sport-name'>{Sport.name}</h2>
        <p className='sport-descrip'>{Sport.description}</p>
        <p className='sport-benef'>{Sport.benefits}</p>
        <p className='sport-equi'>{Sport.equipment}</p>
        <img 
            className='sport-img' 
            src={Sport.image} 
            alt={Sport.name}
          />
        </>
      ) }
    </div>
  )
}
