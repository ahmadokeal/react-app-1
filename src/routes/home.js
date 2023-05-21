import Header from "../components/header.js";
import Footer from "../components/Footer.js";
import { Helmet } from "react-helmet-async";
function Tick() {
  return <h1>time is {new Date().toLocaleTimeString()}</h1>;
}
function Home() {
  return (
    <>
      <Helmet>
        <title>Home page</title>
        <meta name="description" content="this is home page" />
      </Helmet>
      <Header />
      <div className="App">
        <h1 className="title">React Project</h1>
      </div>
      <Footer />
    </>
  );
}
export default Home;
