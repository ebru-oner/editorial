import NavBar from "./Navbar";

import styles from "../styles/general-styles.module.css";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <main className={styles.container}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
