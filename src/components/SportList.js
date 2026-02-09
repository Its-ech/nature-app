import { Link } from 'react-router-dom'

import './SportList.css'


export default function SportList({Sports}) {
  return (
    <div className='sports-list'>
        {Sports.map(Sport=>(
            <div key={Sport.id} className='card'>
                <h3> {Sport.name}</h3>
                <p>{Sport.description}</p>
                <div>{Sport.equipment.substring(0,100)}...</div>
                <Link to={`/Sports/${Sport.id}`}>what is that ?</Link>
            </div>
        ))}
    </div>
  )
}
