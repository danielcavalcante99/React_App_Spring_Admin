import IconBoxes from "../icons/IconBoxes";
import IconSpring from "../icons/IconSpring";

const NavBar = () => {
  return (
    <nav className="navbar navbar-light bg-dark">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1 text-white">
          <IconSpring /> Spring Admin - Monitoramento das APIs <IconBoxes />
        </span>
      </div>
    </nav>
  );
};

export default NavBar;