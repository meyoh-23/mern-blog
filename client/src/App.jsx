import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { About, Dashboard, Home, Projects, Signin, Signup } from './pages';
import { Footer, Header } from './components';
import PrivateRoute from './components/PrivateRoute';

function App() {

  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/sign-in' element={<Signin/>}/>
        <Route path='/sign-up' element={<Signup/>}/>
        <Route element={<PrivateRoute/>}>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Route>
        <Route path='/projects' element={<Projects/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;
