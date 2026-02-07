import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className='navbar'>
        <nav>
        <Link to='/' className='brand'><h1>love nature</h1></Link>
        <Link to='/Sports'>Nature Spotrs</Link>
        </nav>     
    </div>
  )
}
