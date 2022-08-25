import "./App.css";
import Header from "./components/header";
import Login from "./components/pages/login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Header />
      <Login />
      <BrowserRouter>
        <Routes>{/* <Route path='/map'><Map /></Route> */}</Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
