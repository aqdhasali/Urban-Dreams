// import { Link } from "react-router-dom";
import "./Header.css"

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar" style={{height:'40px'}}>
        <div className="container  d-flex justify-content-center align-items-center" >
          <a className="navbar-brand" href="#">
            <img src="../../../public/images/logo.png" id="logo" alt="Bootstrap" className="nav-logo" style={{maxWidth: '95px',maxHeight: '95px'}}/>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Header;
