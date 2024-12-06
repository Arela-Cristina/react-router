import style from "./Menu-Nav.module.css";

export default function  Nav(){
    return (
        <>
         <ul className={style.menu}>
            <li><a href="">Home</a></li>
            <li><a href="">About Us</a></li>
            <li><a href="">Posts List</a></li>
         </ul>
        </>
      )
}