import Header from "../components/header.js";
import Footer from "../components/Footer.js";
import { Helmet } from "react-helmet-async";

function Members() {
  return (
    <>
      <Helmet>
        <title>members page</title>
        <meta
          name="description"
          content="here you can add, delete, register members"
        />
      </Helmet>
      <Header />
      <div className="App">
        <h1 className="title">Welcome Admin</h1>
      </div>
      <Footer />
    </>
  );
}
export default Members;
