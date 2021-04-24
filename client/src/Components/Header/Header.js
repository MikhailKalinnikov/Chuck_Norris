import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <ul className="nav">
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        &nbsp;&nbsp;
        <li>
          <NavLink exact to="/new_jokes">
            Get Jokes
          </NavLink>
        </li>
        &nbsp;&nbsp;
        <li>
          <NavLink exact to="/jokes_favorit">
            My favorite jokes
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
