import { NavLink } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <nav className="Nav">
      <ul>
        <li className="NavItem">
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li className="NavItem">
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </li>
        <li className="NavItem">
          <NavLink to="/contact" activeClassName="active">
            Contact
          </NavLink>
        </li>
        <li className="NavItem">
          <NavLink to="/delivery" activeClassName="active">
            Delivery
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
