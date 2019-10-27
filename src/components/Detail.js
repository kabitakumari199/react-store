import React,{Component} from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
class Detail extends React.Component {
  render() {
    return(
      <ProductConsumer>
        {(value)=>{ const {id,img,company,info,title,price,inCart} = value.detailProduct ;
           return(
             <div className="container py-5">
               <div className="row">
                 <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                   <h1>{title}</h1>
                 </div>
               </div>
               <div className="row">
                 <div className="col-10 mx-auto col-md-6 my-5">
                  <img src={img} className="img-fluid" />
                 </div>
                 <div className="col-10 mx-auto col-md-6 my-5 text-capitalize">
                   <h2>Model: {title}</h2>
                   <h4 className="text-title text-uppercase text-muted mt-2 mb-2">
                     Made by: <span className="text-uppercase">{company}</span>
                     </h4>
                    <h4 className="text-blue">
                      <strong>Price:<span>$</span>{price}</strong>
                    </h4>
                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    Some info about the products:
                    </p>
                    <p className="text-muted lead">{info}</p>
                    <Link to='/'>
                   <button style={{border:"1px solid#ddd"}}>Back to product</button>
                 </Link>
                 <button cart disabled={inCart ? true :false} className="btn-cart ml-5" onClick={()=> { 
                  value.addToCart(id);
                  }}> { inCart ? 'inCart':'Add to cart' } </button>
                 </div>
                 
               </div>
             </div>
           );
        
        }}
      </ProductConsumer>
    );
  }
}
export default Detail;
