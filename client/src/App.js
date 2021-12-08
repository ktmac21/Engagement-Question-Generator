import Navigation from './components/Navigation';
import GetQuestionBtn from './components/GetQuestionBtn'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AddQuestionForm from './components/AddQuestionForm'

function App() {
  return (
    <Router>
      <Navigation />
      <AddQuestionForm />
      <GetQuestionBtn />
    </Router>
  );
}

export default App;
