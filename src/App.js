import { BrowserRouter } from "react-router-dom";

import "./App.css";
import Navbar from "./modules/Navbar/Navbar";
import UserRoutes from "./UserRoutes";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <UserRoutes />
    </BrowserRouter>
  );
}

export default App;
