import { useState } from "react";
import "./App.css";

// custom componenets
import CustomForm from "./components/CustomForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <CustomForm />
    </div>
  );
}

export default App;
