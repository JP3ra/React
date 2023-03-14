import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import Footer from './MyComponents/Footer';
import Todos from './MyComponents/Todos';

function App() {
  let todos = [
    {
      slNo: 1,
      title:  "Go to the market",
      desc: "You need to go to the market"
    },

    {
      slNo: 2,
      title:  "Go to the mall",
      desc: "You need to go to the mall"
    },

    {
      slNo: 3,
      title:  "Go to the bookstore",
      desc: "You need to go to the bookstore"
    }
  ]
  return (
    <>
      <Header title="Todos List" searchBar={true}/>
      <Todos todos = {todos}/>
      <Footer/>

    </>
  );
}

export default App;
