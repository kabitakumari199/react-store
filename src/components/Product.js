import React,{Component} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';

class Product extends React.Component {
  
  render() {
    const {id, title, img , price, inCart} = this.props.product;
    return(
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <ProductConsumer>
          {(value)=> (<div className="img-container p-3" onClick={()=> value.handleDetail(id)}>
          <Link to='/detail'>
            <img src={img} alt="Product Image" className="card-img-top" />
          </Link>
          <button className="cart-btn" disabled={inCart ? true : false} onClick={()=>{
            value.addToCart(id);
             }} >
          {inCart?(<p className="text-capitalize mb-0" disabled>{""} in cart</p>):(<i className="fas fa-cart-plus"></i>)}
          </button>
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0">{title}</p>
            <h5 className="text-blue font-italic mb-0">
              <span className="mr-1">$</span> {price}
            </h5>
          </div>
          </div>)}
          </ProductConsumer>
        </div>
    </ProductWrapper>
    );
  }
} 
const ProductWrapper = styled.div `
.card{
  border-color:transparent;
  transition:all 1s linear;
}
.card-footer{
  background:transparent;
  border-top:transparent;
  transition:all 1s linear;
}
&:hover{
  .card{
    border:0.04rem solid rgba(0,0,0,0.2);
    box-shadow:2px 2px 5px 0px rdba(0,0,0,0.02);
  }
}
.cart-footer{
  backgroud:rgba(247,247,247);
}
.img-container{
  position:relative;
  overflow:hidden;
}
.img-container:hover .cart-img-top {
 transform:scale(1.2);
}
.card-img-top{
  transition:all 1s linear; 
}
.cart-btn{
  position:absolute;
  bottom:0;
  right:0;
  padding:0.2rem 0.4rem;
  background:var(--lightBlue);
  border:none;
  color:var(--mainWhite);
  font-size:1.4rem;
  border-radius:0.5rem 0 0 0;
  transform:translate(100%,100%);
  transition:all 1s linear;
}
.img-container:hover .cart-btn{
  transform:translate(0,0);
}
.cart-btn:hover{
 color:var(--mainBlue);
 cursor:pointer;
}
`;
export default Product;
