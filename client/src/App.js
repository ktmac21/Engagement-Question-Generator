import Navigation from './components/Navigation';
import GetAQuestion from './components/GetAQuestion';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AddQuestionForm from './components/AddQuestionForm';
import About from './components/About'; 
import Contact from './components/Contact'; 

function App() {
  
  return (
    <div className='App'>
    <BrowserRouter>
      
        <Navigation />
        <Routes>
          <Route path='/' element={<GetAQuestion/>} />
          <Route path="/about" element={<About />} />
          <Route path="/add" element={<AddQuestionForm />} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      
    </BrowserRouter>
    </div>
  );
}

export default App;
