import Navbar from "./components/Navbar";
import "./app.css";
import Home from "./components/Home";
import Post from "./pages/Post";

const App = () => {
  return <div>
    <Navbar />
    {/* <Home /> */}
    <Post />
    </div>;
};

export default App;