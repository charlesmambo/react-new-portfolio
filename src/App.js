
import './App.css';
import ContactMe from './components/contact/ContactMe';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Project from './components/project/Project';

function App() {
  return (
    <div className="App">
      <Header />
      <Project />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
