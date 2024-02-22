import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import { UserAuthContextProvider } from './context/UserAuthContext'
import Login from './components/Login';
import Signup from './components/Signup'
import Landing from './components/Landing';
import Footer from './components/Footer';
import GeminiPro from './components/GeminiPro';
<<<<<<< Updated upstream
import Autism from './components/Autism';
=======
import SearchBar from './components/YoutubeSearch';
>>>>>>> Stashed changes
function App() {

  return (
    <>
        <UserAuthContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Landing />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/signup" exact element={<Signup />} />
            <Route path="/gemini" exact element={<GeminiPro />} />
<<<<<<< Updated upstream
            <Route path="/autism" exact element={<Autism/>} />
=======
            <Route path="/yt" exact element={<SearchBar/>} />
>>>>>>> Stashed changes
          </Routes>
          <Footer/>
        </UserAuthContextProvider>
    </>
  )
}

export default App
