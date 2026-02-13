import { useLocation } from 'react-router-dom'
import '../Serch/Serch.css'
import '../../components/SportList.css'
import { useFetch } from '../../hooks/useFetch'
import SportList from '../../components/SportList'

export default function Serch() {
  const queryString = useLocation().search
  const queryParams = new URLSearchParams(queryString)
  const query = queryParams.get('q')
  const url = `http://localhost:3000/Sports?name=${query}`
  
  const {error, isLoading, data} = useFetch(url)
  return (
    <div>
      <h2 className='page-name'>
        Sport including "{query}"</h2>
        {error && <p>{error}</p>}
        {isLoading && <p>isLoading...</p>}
        {data && <SportList Sports={data}/>}
    </div>
  )
}
