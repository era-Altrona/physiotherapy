import { useState } from "react";
import style from "./header.module.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={style.header}>
      <h2 className={style.logo}>
        <img src="/Athles_Sygnet_White_Burgundy.svg" alt="Logo" />
        Athles
      </h2>

      {/* Кнопка бургера, видима лише на мобільних */}
      <div className={`${style.burger} ${isOpen ? style.active : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Навігація */}
      <nav className={`${style.nav} ${isOpen ? style.navOpen : ""}`}>
        <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
        <a href="#services" onClick={() => setIsOpen(false)}>Usługi</a>
        <a href="#contact" onClick={() => setIsOpen(false)}>Kontakt</a>
      </nav>
    </header>
  );
}