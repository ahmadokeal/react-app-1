import Header from "../components/header.js";
import Footer from "../components/Footer.js";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Videos() {
  return (
    <>
      <Helmet>
        <title>Videos page</title>
        <meta name="description" content="this is videos page" />
      </Helmet>
      <Header />
      <h1 className="title">Videos</h1>
      <Link to="/videos/add">add video</Link>
      <Footer />
    </>
  );
}
export default Videos;
