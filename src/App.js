import React from "react";
import Home from "./components/home";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Create from "./components/create";
import Edit from "./components/edit";


const App = () => {

  return (
    <div className="container">
     <h1>User List</h1>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/create" element={<Create/>} />
      <Route path="/edit" element={<Edit/>} />
     </Routes>
     </BrowserRouter>
    </div>
  );
};

export default App;
