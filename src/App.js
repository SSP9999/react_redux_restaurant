import Home from "./components/home";
import Order from "./components/order";
import {BrowserRouter,Routes,Route} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/order" element={<Order/>}/>
      </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
