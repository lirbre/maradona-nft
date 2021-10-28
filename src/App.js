import './App.css';
import Navbar from './components/navbar/navbar';
import MainPage from './components/mainpage/mainpage';
import MiddlePage from './components/middlepage/middlepage';
import EndPage from './components/portraitpage/portraitpage';
import Footer from './components/footer/footer';

function App() {
  return (
    <>
      <Navbar/>
      <MainPage/>
      <MiddlePage/>
      <EndPage/>
      <Footer/>
    </>
  );
}

export default App;
