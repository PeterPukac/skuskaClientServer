import Main from './Main';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import AddAcount from './AddAcount';
import DataLoader from './DataLoader';
import { Routes, Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/list/:group" element={<DataLoader/>} />
        <Route path="/" element={<Main/>} />
        <Route path="addAccount" element={<AddAcount/>} />
      </Routes>
      <Footer/>

    </div >
  );
}

export default App;

