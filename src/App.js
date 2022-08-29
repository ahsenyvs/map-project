import "./App.css";
import Header from "./components/header";
import Login from "./components/pages/login";
import Map from "./components/pages/map";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path='/map' element={<Map />} />
          <Route exact path='/' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
