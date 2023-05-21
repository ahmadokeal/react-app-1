import Home from "./routes/home.js";
import Videos from "./routes/videos";
import AddVideo from "./routes/addVideos.js";
import Members from "./routes/members.js";
import Cats from "./routes/cats.js";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/members" element={<Members />} />
        <Route path="/categories" element={<Cats />} />
        <Route path="/videos/add" element={<AddVideo />} />
      </Routes>
    </div>
  );
}

export default App;
