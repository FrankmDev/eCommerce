import "./Header.css";
import logo from "../../public/Logotipo.png";
import { BiUser } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-div">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <nav className="nav">
        <ul>
          <li className="nav-item">
            <a href="#home">Home</a>
          </li>
          <li className="nav-item">
            <a href="#catalog">Catalog</a>
          </li>
          <li className="nav-item">
            <a href="#contacts">Contacts</a>
          </li>
          <li className="nav-item">
            <a href="#faqs">Faqs</a>
          </li>
        </ul>
      </nav>
      <div className="icons-div">
        <BiUser className="icon" />
        <AiOutlineHeart className="icon" />
        <AiOutlineShoppingCart className="icon" />
      </div>
    </header>
  );
};
export default Header;
