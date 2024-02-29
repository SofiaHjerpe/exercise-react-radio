import { NavLink } from "react-router-dom";
import { IRoute } from "../interfaces";

interface IHeaderProps {
  links: IRoute[];
}

export const Header = ({ links }: IHeaderProps) => {
  return links.map((link) => (
    <NavLink key={link.id} className="link" to={link.path}>
      {link.name}
    </NavLink>
  ));
};

export default Header;
