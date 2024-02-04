import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { About, Dashboard, Home, Projects, Signin, Signup } from './pages';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/sign-in' element={<Signin/>}/>
        <Route path='/sign-up' element={<Signup/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/projects' element={<Projects/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
