import NavBar from "./Navbar";

import styles from "../styles/Home.module.css";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <main className={styles.container}>{children}</main>
      <Footer />;
    </div>
  );
};

export default Layout;
