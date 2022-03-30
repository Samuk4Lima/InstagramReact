import styles from "./Header.module.css";
import { AiOutlineSearch, AiFillHome } from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";
import { BsPlusSquare } from "react-icons/bs";
import { MdOutlineExplore } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import { IconContext } from "react-icons";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img
          className={styles.logoImage}
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="Instagram Logo"
        />

        <div className={styles.fakeInput}>
          <IconContext.Provider value={{ color: "#8e8e8e" }}>
            <AiOutlineSearch />
          </IconContext.Provider>
          <input type="text" placeholder="Pesquisar" />
        </div>

        <div className={styles.icones}>
          <IconContext.Provider value={{ size: "26px" }}>
            <div>
              <AiFillHome />
            </div>
            <div>
              <RiMessengerLine />
            </div>
            <div>
              <BsPlusSquare />
            </div>
            <div>
              <MdOutlineExplore />
            </div>
            <div>
              <FiHeart />
            </div>
          </IconContext.Provider>

          <img
            src="https://pps.whatsapp.net/v/t61.24694-24/255598018_350332563423507_6873053833958141382_n.jpg?ccb=11-4&oh=01_AVzhZzffJ30iecKoi1LUzfmVZ2Svl1zi6aIhWKeQU_rWuA&oe=62481071"
            alt="UserLogo"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
