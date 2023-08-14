import Link from "next/link";

import { useRouter } from "next/router";
import { roboto } from "../utils/fonts";
import styles from "../styles/Home.module.css";

const NavBar = () => {
  const router = useRouter();

  return (
    <header className={styles.navigation}>
      <h4 className={roboto.className}>Logo</h4>
      <nav className={styles.navItems}>
        <Link
          classnames={router.pathname === "/" ? `${styles.activeNavLink}` : ""}
          href="/"
        >
          <h5 className={roboto.className}>Home</h5>
        </Link>
        <Link
          className={
            router.pathname === "/about" ? `${styles.activeNavLink}` : ""
          }
          href="/about"
        >
          <h5 className={roboto.className}>About</h5>
        </Link>
        <Link
          className={
            router.pathname === "/contact" ? `${styles.activeNavLink}` : ""
          }
          href="/contact"
        >
          <h5 className={roboto.className}>Contact</h5>
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;
