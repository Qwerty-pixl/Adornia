import { NavLink } from "react-router-dom";
import "./Button.css";

export default function Button() {
  return (
    <NavLink to="/about" className="CartButton">
      Learn more
    </NavLink>
  );
}
