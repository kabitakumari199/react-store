import React,{Component} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';

class Navbar extends React.Component {
  render() {
    return (
      <Navwrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
       <Link to="">
        <img src={logo} className="navbar-brand" />
       </Link>
       <ul className="navbar-nav align-items-center">
         <li className="nav-item ml-5">
           <Link to="/" className="nav-link">Products</Link>
         </li>
       </ul>
       <Link to='/cart' className="ml-auto">
         <ButtonContainer>
           <span className="mr-2">
           <i class="fas fa-cart-plus">My Cart</i>
           </span>
         </ButtonContainer>
       </Link>
      </Navwrapper>
    );
  }
}

const ButtonContainer = styled.button `text-transform:capitalize;
font-size:1.4rem;
background:transparent;
border:0.05rem solid var(--lightBlue);
color:var(--lightBlue);
border-radius:0.5rem;
padding:0.5rem 0.5rem;
cursor:pointer;
margin:0.2rem 0.5rem 0.2rem 0;
transition:all 0.5s ease-in-out;
&:hover{
  background:var(--lightBlue);
  color:var(--mainBlue);
}
&:focus{
  outline:none;
}
`;
const Navwrapper = styled.nav `
background:var(--mainBlue);
.nav-link:{
  color:#fff !important;
  font-size:1.3rem;
  text-transform:capitalize !important;
}
.navbar-dark .navbar-nav .nav-link {
  color: #fff !important;
}
`;

export default Navbar;
