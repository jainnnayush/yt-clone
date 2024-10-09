import React from "react";
import Navbar from "./Components/navbar";
import Sidebar from "./Components/Sidebar";
import { useAuth } from "./context/AuthProvider";
function App() {
  const {loading,data}=useAuth;
  console.log(loading);
  console.log(data);
  return (
    <div>
      <Navbar/>
      <Sidebar/>
    </div>
  );
}

export default App;
