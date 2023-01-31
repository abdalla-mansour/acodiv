import Header from './components/header/Header';
import Home from './components/home/Home';
import Portfolio from './components/jobs/Portfolio';
import Service from './components/services/Service';
import Footer from './components/footer/Footer';
import Nav from './components/nav/Nav';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Home />
      <Service />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
