import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Random from './components/Random';
import Tag from './components/Tag';

function App() {
  return (
    <div className="App">
        <Header/>
      <Random/>
        <Footer/>
        <Tag/>
    </div>
  );
}

export default App;
