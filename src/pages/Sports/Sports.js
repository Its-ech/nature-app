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
      {Sport && <h1>{Sport.name}</h1>}
    </div>
  )
}
