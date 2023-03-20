import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <>
      <Navbar   />
      <div className="container">
      <TextForm  heading = "This is the sample page" />
      </div>
    </>
  );
}

export default App;
