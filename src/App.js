import "./App.css";
import Header from "./components/header";
import Login from "./components/pages/login";
import Map from "./components/pages/map";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserContext from "./context/UserContext";
import { users } from "./dummy/users";

function App() {
  return (
    <div className='App'>
      <Header />
      <BrowserRouter>
        <UserContext.Provider value={{ users }}>
          <Routes>
            <Route exact path='/map' element={<Map />} />
            <Route exact path='/' element={<Login />} />
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
