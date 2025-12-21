import Link from "next/link";
import styles from "./TopActions.module.css";
import Container from "../Container/Container";
export default function TopActions({ navItems = [] }) {
  return;
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
