import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from "./Components/Header";
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import About from './Pages/About';
import Profile from './Pages/Profile';



const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/Home" element={<Home/>}/>
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/Sign-up" element={<SignUp />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/About" element={<About />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App