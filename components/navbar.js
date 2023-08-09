import Link from "next/link";
import { useRouter } from "next/router";

import styles from "../styles/Home.module.css";

const NavBar = () => {
  const router = useRouter();

  return (
    <header className={styles.navigation}>
      <h4>Logo</h4>
      <nav className={styles.navItems}>
        <Link
          className={router.pathname === "/" ? `${styles.activeNavLink}` : ""}
          href="/"
        >
          Home
        </Link>
        <Link
          className={
            router.pathname === "/about" ? `${styles.activeNavLink}` : ""
          }
          href="/about"
        >
          About
        </Link>
        <Link
          className={
            router.pathname === "/contact" ? `${styles.activeNavLink}` : ""
          }
          href="/contact"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;
