import { Link } from "react-router-dom";
import { IRoute } from "../interfaces";

interface IHeaderProps {
  links: IRoute[];
}

export const Header = ({ links }: IHeaderProps) => {
  return (
    <>
      <header>
        {links.map((link) => (
          <Link key={link.id} className="link" to={link.path}>
            {link.name}
          </Link>
        ))}
      </header>
    </>
  );
};

export default Header;
