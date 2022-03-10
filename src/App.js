import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Order from './components/Order';
import Result from './components/Result';
import Service from './components/Service';
import Work from './components/Work';

function App() {
  return (
    <>
      <Header/>
      <Main/>
      <Service/>
      <Work/>
      <Result/>
      <Order/>
      <Footer/>
    </>
  );
}

export default App;
