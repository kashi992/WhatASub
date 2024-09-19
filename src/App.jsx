import {
  BrowserRouter as Router
} from 'react-router-dom';
import AppRouter from './pages/AppRouter';
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./assets/css/main.css";


function App() {

  return (
    <>
      <Router>
        <Header />
        <AppRouter/>
        <Footer />
      </Router>
    </>
  );
}

export default App;
