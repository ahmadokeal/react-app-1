import Header from "../components/header";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";

function AddVideo() {
  return (
    <>
      <Helmet>
        <title>add videos </title>
        <meta name="description" content="here you can adding videos" />
      </Helmet>
      <Header />
      <form action="post">
        <input type="text" name="" id="" />
      </form>
      <Footer />
    </>
  );
}
export default AddVideo;
