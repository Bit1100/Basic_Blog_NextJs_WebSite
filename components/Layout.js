import Navbar from "./Navbar";
import Footer from "./Footer";
import Meta from "./Meta";
const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Navbar />
      <div className="container">
        <main className="main">{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
