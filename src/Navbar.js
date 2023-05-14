import React from "react";
import { Link, Outlet, useMatch, useResolvedPath } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import { useState } from "react";
import { BiNote } from "react-icons/bi";
// import "./css/App.scss"
function Navbar() {
    const[isToggled,Toggled]=useState(false)
    const Click=(event)=>{
        Toggled(true)
        if(isToggled){
            Toggled(false)
        }
    }
  return (
    <>
      <header>
<div className="Nav-Toggle-body">
        
<div className='Navbar-Toggle'>
            <div className={`Navbar-Toggle-Menu  ${isToggled ?'Active':''}`}>
            <CustomLinkMobile to="/">Home</CustomLinkMobile>
              <CustomLinkMobile
                target="_blank"
                to="https://github.com/touma0dev/react-project-postit"
              >
                Git
                <AiFillGithub />
              </CustomLinkMobile>
              <CustomLinkMobile to="/sobre">Sobre</CustomLinkMobile>
            </div>
<div onClick={Click} className={`Toggle-menu-toggled ${isToggled ?'Active':''}`} >
          
          <section>
          <li>
             <b></b>
           </li>
           <li>
             <b></b>
           </li>
          </section>
       </div>
</div>
</div>
        <div className="Nav-test">
          <nav className="Navbar">
            <ul className="Navbar-logo">
              <h1>
               Sticky
                <BiNote />
              </h1>
            </ul>
            <section className="Navbar-lista">
              <CustomLink to="/">Home</CustomLink>
              <CustomLink
                target="_blank"
                to="https://github.com/touma0dev/react-project-postit"
              >
                Git
                <AiFillGithub />
              </CustomLink>
              <CustomLink to="/sobre">Sobre</CustomLink>
            </section>
          </nav>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "Navbar-lista-active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
function CustomLinkMobile({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "Navbar-lista-active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
export default Navbar;
