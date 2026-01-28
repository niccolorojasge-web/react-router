import {  NavLink } from "react-router-dom"
function Navbar() {
//dati per navbar 
    const links = [
        {path:'/', label:'homepage'},
        {path:'/who-weare' ,label:'Whoweare'},
        {path:'/product-list', label:'Our Products'},
    ]

  return (
    <>
    <nav className="main-nav">
      <ul>
        {links.map((link,i)=>(
          <li key={i}>
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