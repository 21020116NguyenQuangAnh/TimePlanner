import { Outlet, Link } from "react-router-dom";
import Header from "../components/Header";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Layout = () => {
  return (
    <>
      <HelmetProvider>
        <div>
          <Helmet>
            <title>T3 App</title>
            <meta name="description" content="Generated by create-t3-app" />
            <link rel="icon" href="/favicon.ico" />
          </Helmet>
        </div>
      </HelmetProvider>
      {/* 
      <header>
        <div className="flex justify-center items-center">
          <Header />
        </div>
      </header> 
      */}
      <main>
        {/* <NavBar /> */}
        {/* <nav className="flex justify-center items-center">
              <ul>
                  <li>
                      <Link to="/">Home</Link>
                  </li>
                  <li>
                      <Link to="/contact">Contact</Link>
                  </li>
                  <li>
                      <Link to="/Signup">Sign up</Link>
                  </li>
                  <li>
                      <Link to="/login">Login</Link>
                  </li>
              </ul>
            </nav> */}
      </main>
      <Outlet /> {/* renders the current route selected. */}
    </>
  );
};

export default Layout;
