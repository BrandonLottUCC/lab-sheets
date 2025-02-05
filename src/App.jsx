import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import QualityControlForm from "./components/QualityControlForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-white p-4">
      <QualityControlForm />
    </div>
  );
}

export default App;
