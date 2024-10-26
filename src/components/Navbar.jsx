import PropTypes from 'prop-types';
import Logo from '../assets/logo.png';
const Navbar=({credits})=>{
  return (
    <div className="sticky top-0 bg-white/50 z-10">
      <div className="navbar mb-3 md:mb-5">
        {/* Navbar */}
        {/* left part */}
        <div className="navbar-start">
          {/* dropdown part */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-[#131313B3] text-base font-normal"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Fixture</a>
              </li>
              <li>
                <a>Teams</a>
              </li>
              <li>
                <a>Schedules</a>
              </li>
            </ul>
          </div>
          <img src={Logo} alt=""/>
        </div>
        {/* right part */}
        <div className="navbar-end">
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-[#131313B3] text-base font-normal">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Fixture</a>
              </li>
              <li>
                <a>Teams</a>
              </li>
              <li>
                <a>Schedules</a>
              </li>
            </ul>
          </div>
          <a className="btn font-semibold">${credits} Coin<img width="24" height="24" src="https://img.icons8.com/fluency/48/cheap-2--v1.png" alt="cheap-2--v1"/></a>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes={
  credits: PropTypes.number.isRequired,
}

export default Navbar;
