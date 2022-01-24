// import React, {Component} from "react";
// import {MenuItems} from "./MenuItems";
// import './Navbar.css';
import logo from './logo1.png';
import App from '../App.js';
import {Link} from 'react-router-dom';

// class Navbar extends Component {
//     state = {clicked: false}
//     handleClick = () => {
//         this.setState({clicked: !this.state.clicked})
//     }


//     render() {
//         return (
//             <nav className= "NavbarItems">
//                 <img src={logo} alt="logo" height='100px' width='100px' href={App}/>
//                 <div className="menu-icon" onClick={this.handleClick}>
//                     <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
//                 </div>
//                 <ul className = {this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
//                     {MenuItems.map((item, index) => {
//                         return (
//                             <li>
//                                 {/* <a className={item.cName}></a> */}
//                                 <Link to={`$item.url`}>{item.title}</Link>
//                             </li>
//                         )
//                     })}
//                 </ul>
//             </nav>
//         )

//     }
// }
// export default Navbar


import React from 'react'

const Navbar = () => {   
    const links = [
        {
            // className: styles.className,
            // activeClassName: styles.activeClassName,
            to: '/About',
            name: 'About'
        },
        {
            // className: styles.className,
            // activeClassName: styles.activeClassName,
            to: '/Beamentor',
            name: 'Become a Mentor'
        },
        {
            // className: styles.className,
            // activeClassName: styles.activeClassName,
            to: '/Login',
            name: 'Login'
        },    
    ]    


    return (
      <div>
          <div>
          <img src={logo} alt="logo" height='100px' width='100px' href={App}/>  
          </div>
          <div>
         {links.map(link => (<Link className={link.className} activeClassName={link.activeClassName} to={link.to}>{link.name}</Link> ))}
         </div>
      </div>
    )
}
export default Navbar
