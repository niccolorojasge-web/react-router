import { link, NavLink } from "react-router-dom"
function Navbar() {
//dati per navbar 
    const links = [
        {path:'/', label:'homepage'},
        {path:'/Whoweare' ,label:'/Whoweare'},
        {path:'/Productlist', label:'/Productlist'},
    ]

  return (
    <>
    <nav className="main-nav">
      <ul>
        {links.map((link, i)=>(
          <li id={link.i}>
            <NavLink to={link.path}>
             {link.label}
            </NavLink>

          </li>  
        ))}
      </ul>
    </nav>
    </>
  )
}

export default Navbar