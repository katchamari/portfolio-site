import Link from "next/link";
import styles from "./Header.module.css";
import Container from "../Container/Container";
export default function Header() {
  return (
    <header className={styles.header}>
      <h1>momie</h1>
    </header>
  );
  return (
    <nav className={styles.navbar}>
      <Container>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/login">Login</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}
