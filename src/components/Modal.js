import React,{Component} from 'react';
import styled from 'styled-components';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';

class Modal extends React.Component {
  render() {
    return(
     <ProductConsumer>
       {(value)=>{
         const {modalOpen,closeModal} = value;
         const {img,title,price}= value.modalProduct;
         console.log('its modalOpen value',modalOpen);
         if(!modalOpen){
           return null;
         }
         else{
           return(<ModalContainer>
            <div className="container">
              <div className="row">
                <div id="modal" className="col-8 max-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                 <h5>Item added to the cart</h5>
                 <img src={img} className="img-fluid" alt="Product" />
                 <h5>{title}</h5>
                 <h5 className="text-muted">Price : {price}</h5>
                 <Link to='/cart'><button onClick={()=>this.closeModal}>Store</button></Link>
                 <Link to='' cart><button onClick={()=>this.closeModal}>Go to cart</button></Link>
                </div>
              </div>
            </div>
           </ModalContainer>);
         }
       }}
     </ProductConsumer>
    );
  }
}
const ModalContainer = styled.div `
 position:fixed;
 top:0;
 left:0;
 right:0;
 buttom:0;
 background:rgba(0,0,0,0.3);
 display:flex;
 align-items:center;
 justify-content:center;
 #modal{
   background:var(--mainWhite);
 }
`;
export default Modal;
