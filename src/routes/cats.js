import Header from "../components/header.js";
import Footer from "../components/Footer.js";
import { Helmet } from "react-helmet-async";
function Cats() {
  return (
    <>
      <Helmet>
        <title>categories page</title>
        <meta name="description" content="this is cats page" />
      </Helmet>
      <Header />

      <div className="App">
        <h1 className="title">Categories</h1>
      </div>
      <Footer />
    </>
  );
}
export default Cats;
