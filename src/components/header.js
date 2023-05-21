import { NavLink } from "react-router-dom";
function Header() {
  return (
    <>
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/members">members</NavLink>
        <NavLink to="/videos">videos</NavLink>
        <NavLink to="/categories">categories</NavLink>
      </header>
    </>
  );
}
export default Header;
