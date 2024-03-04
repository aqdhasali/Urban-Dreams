import HeroContainer from './HeroContainer'
import { Routes,Route } from 'react-router-dom'
import PropertyPage from './PropertyPage'

const Home = () => {
  return (
      <Routes>
        <Route path='/' element={<HeroContainer/>}/>
        <Route path='/property/:id' element={<PropertyPage />} />
      </Routes>
  
  )
}

export default Home
