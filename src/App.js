import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import Temperature from "./pages/home/temperature/temperature";
import NotFound from "./pages/home/notFound/notfound";
import Capteur1 from "./pages/capteur1/capteur1";

import "./App.css"

import {BrowserRouter,Routes,Route} from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Topbar/>
        <div className="container">
          <Sidebar className="sidebar"/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/temperature' element={<Temperature/>}/>
            <Route path='/capteur1' element={<Capteur1/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </div>  
      </div>
    </BrowserRouter>
  );
}

export default App;
