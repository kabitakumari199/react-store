import React,{Component} from 'react';

class Default extends React.Component {
  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto text-title text-center text-uppercase pt-5">
           <h1 className="display-3">404</h1>
           <h1>Error</h1>
           <h2>Page Not Found</h2>
           <h3>The requested Url <span className="text-danger">{this.props.location.pathname}</span> is not found</h3>
          </div>
        </div>
      </div>
    );
  }
}
export default Default;
