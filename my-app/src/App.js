import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
// import TextForm from './Components/TextForm';
import About from './Components/About';

function App() {
  return (
    <>
      <Navbar   />
      <div className="container">
      {/* <TextForm  heading = "This is the sample page" /> */}
      <About />
      </div>
    </>
  );
}

export default App;
