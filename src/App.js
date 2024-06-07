

import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import { SearchProvider } from './components/SearchContext';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Newsscroller from './components/Newsscroller';





function App() {
  
 
  return (
    <>

    

    <Router>
    <SearchProvider>
    <Navbar  />
      <Routes>
      
        <Route>
        <Route path="/" element={<News/>} />
        <Route path="/News" element={<News/>} />
        <Route path="/Home" element={<News/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/scroll" element={<Newsscroller/>} />
        </Route>
       
      </Routes>
      <Footer/>
      </SearchProvider>
    </Router>
      
   
     
      
     
      
      </>
      
     
    
  );
}

export default App;
