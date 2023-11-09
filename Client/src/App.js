import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Footer from './components/common/Footer';
import Home from './components/pages/Home/Home';
import Allmodels from './components/pages/Allmodels/Allmodels';
import About from './components/pages/About/About';
import Contactus from './components/pages/Contactus/Contactus';
import Modelsprofile from './components/pages/Modelsprofile/Modelsprofile';
import SignUp from "./components/forms/SignUp";
import SignIn from "./components/forms/SignIn";


function App() {
  return (
    <>
    <Router>
      <Routes>
         <Route path='/' exact element={<Home/>} />
         <Route path='/all_models' exact element={<Allmodels/>} />
         <Route path='/about_us' exact element={<About/>} />
         <Route path='/signup' exact element={<SignUp/>} />
         <Route path='/signin' exact element={<SignIn/>} />
         <Route path='/contact_us' exact element={<Contactus/>} />
         <Route path='/model_profile/:id' exact element={<Modelsprofile/>} />
      </Routes>
      
    
      <Footer/>
      

    </Router>
    </>
  );
}

export default App;
