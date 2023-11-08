import { NavLink } from "react-router-dom";

const NavBar = () => {
  const navLink = <>
    <li><NavLink to={'/'}>Statistics</NavLink></li>
    <li><NavLink to={'/applied'}>Applied Jobs</NavLink></li>
    <li><NavLink to={'/blogs'}>Blogs</NavLink></li>
  </>
  return (
    <div className="shadow-md">
      <div className="max-w-screen-xl mx-auto px-3 md:px-5 flex justify-between items-center">
        <div className="navbar bg-base-100 flex justify-between items-center ">
          <h2 className="text-2xl font-semibold uppercase">Career<span className="text-lime-600">Hub</span></h2>
          <div className="hidden md:flex">
            <ul className="menu menu-horizontal px-1">
              {navLink}
            </ul>
          </div>
          <div className="">
            <a className="btn btn-sm btn-primary">Button</a>
          </div>
        </div>
        <div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-36">
              {navLink}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;