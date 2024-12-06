import style from "./Nav.module.css"
import { Link, NavLink } from "react-router-dom"

export default function Nav() {
  return (
    <>
      <nav>
        <ul className={style.menu}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/About">About Us</NavLink>
          <NavLink to="/Posts">Posts</NavLink>
        </ul>
      </nav>
    </>
  );
}