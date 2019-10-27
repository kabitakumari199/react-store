import React,{Component} from 'react';
import {storeProducts,detailProduct} from './data';
const ProductContext = React.createContext();

class ProductProvider extends React.Component {
  state = {
    products:[],
    detailProduct:detailProduct,
    cart:[],
    modalOpen:false,
    modalProduct:detailProduct,
    cartSubtotal:0,
    cartTax:0,
    cartTotal:0
  }

  componentDidMount(){
    this.setProducts();
  }

  setProducts = ()=> {
    let temProducts = [];
    storeProducts.forEach(item => {
      const singleItem = {...item};
      temProducts = [...temProducts,singleItem];
    });
    this.setState(()=>{
      return {products:temProducts};
    }); 
   }

  getItem = (id) => {
    const product = this.state.products.find(item=>item.id===id);
    return product;
  }

  handleDetail = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
    return{
      detailProduct:product
    };
    });
  
  }

  addToCart = (id) => {
    let temProducts = [...this.state.products];
    let index = temProducts.indexOf(this.getItem(id));
    const product = temProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(()=>{
      return {
        products:temProducts,cart:[...this.state.cart,product]
      }
    },()=>{ this.addTotals() });
    
  }

  openModal = id =>{
    const product = this.getItem(id);
    this.setState(()=>{
      return{
        modalProduct:product,modalOpen:true
      }
    })
  }
  closeModal = () => {
   this.setState(()=>{
     return{
       modalOpen:false
     }
   });
  }

  increment = (id) => {
    console.log(`this is increment method ${id}`);
    let temCart = [...this.state.cart];
    const selectedProduct = temCart.find(item => item.id === id);
    const index = temCart.indexOf(selectedProduct);
    const product = temCart[index];
    product.count = product.count + 1;
    product.total = product.count * product.price;
    this.setState(()=>{ return{ cart:[...temCart]} }, ()=> { this.addTotals() })
  }
  decrement = (id) => {
    let temCart = [...this.state.cart];
    const selectedProduct = temCart.find(item => item.id === id);
    const index = temCart.indexOf(selectedProduct);
    const product = temCart[index];
    product.count = product.count - 1;
    if(product.count===0){
      this.removeItem(id);
    }else {
      product.total = product.count*product.price; 
      this.setState(()=>{ return{ cart:[...temCart]} }, ()=> { this.addTotals() })
    }
  }
  removeItem = (id) => {
    console.log(`this is removeItem method ${id}`);
    let temProducts = [...this.state.products];
    let temCart = [...this.state.cart];
    temCart = temCart.filter(item => item.id !== id);
    console.log('its cart product item',temCart);
    const index = temProducts.indexOf(this.getItem(id));
    let removeProduct = temProducts[index];
    console.log(removeProduct);
    removeProduct.inCart = false;
    removeProduct.count = 0;
    removeProduct.total = 0;
    this.setState(()=>{
      return { cart:[...temCart],
      products:[...temProducts]
      }
    }, ()=>
    {
       this.addTotals();
    }
    )
    

  }
  clearCart = () => {
 
    this.setState(()=>{
      return {cart:[]}
    },
    ()=> {
    this.setProducts();
    this.addTotals();
    }
    );
  }
 
 addTotals = () => {
   let subTotal = 0;
   this.state.cart.map(item =>(subTotal += item.total));
   const tempTax = subTotal * 0.1;
   const tax = parseFloat(tempTax.toFixed(2));
   const total = subTotal+tax;
   this.setState(()=> {
     return {
       cartSubtotal:subTotal,
       cartTax:tax,
       cartTotal:total
     }
   });
  }


  render(){
    return(
      <ProductContext.Provider value={{...this.state,
      handleDetail:this.handleDetail,
      addToCart:this.addToCart,
      modalOpen:this.openModal,
      closeModal:this.closeModal,
      increment:this.increment,
      decrement:this.decrement,
      removeItem:this.removeItem,
      clearCart:this.clearCart
      }}>
      {this.props.children}
      </ProductContext.Provider>
    );
  }
}
const ProductConsumer = ProductContext.Consumer
export {ProductProvider,ProductConsumer};