import HomeScreen from "./screens/HomeScreen";
import "./App.css";
import { useState } from "react";

function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="app">
      <HomeScreen openModal={openModal} setOpenModal={setOpenModal} />
    </div>
  );
}

export default App;
