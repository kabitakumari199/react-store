import React,{Component} from 'react';
import CartItem from './CartItem';

const CartList = ({value}) =>{
  console.log('i am on cartList page',value);
  const {cart} = value;  
  return(
    <div className="container-fluid ">
      {
        cart.map(item=>{
          return <CartItem key={item.id} item={item} value={value} />;
        })
      }
      
   </div>
  );
}
export default CartList;
