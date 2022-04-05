import { Link } from "react-scroll";
export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <img src="../img/header-mfm.jpg"></img>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link
                activeClass="active"
                to="#beranda"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Beranda
              </Link>
            </li>

            <li>
              <Link
                activeClass="active"
                to="#layanan"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Layanan
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="#artikel"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Artikel
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="#kontak"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Kontak
              </Link>
            </li>
            <li>
              <a>Masjid Fatimah Muhammad TV</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
