import Navbar from "./components/Navbar";
import "./app.css";
import Post from "./pages/Post";
import Home from "./pages/Home";
import Login from "./pages/Login";

const App = () => {
  return <div>
    <Navbar />
    {/* <Home /> */}
    {/* <Post /> */}
    <Login />
  </div>;
};

export default App;