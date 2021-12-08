import Navigation from './components/Navigation';
import GetQuestionBtn from './components/GetQuestionBtn';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AddQuestionForm from './components/AddQuestionForm';
import About from './components/About'; 
import Contact from './components/Contact'; 

function App() {
  
  return (
    <BrowserRouter>
      
        <Navigation />
        <Routes>
          <Route path='/' element={<GetQuestionBtn/>} />
          <Route path="/about" element={<About />} />
          <Route path="/add" element={<AddQuestionForm />} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      
    </BrowserRouter>
  );
}

export default App;
