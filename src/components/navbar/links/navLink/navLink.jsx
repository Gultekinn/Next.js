"use client"
import Link from "next/link";
import styles from "./navLink.module.css";
import { usePathname } from "next/navigation";
const NavLink = ({ item }) => {
    const pathName=usePathname() //bu bir hookdur
  return (
    <Link href={item.path} className={`${styles.container} ${pathName===item.path && styles.active}`} key={item.title}>
      {item.title}
    </Link>
  );
};

export default NavLink;
