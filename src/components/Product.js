 import React, { Component } from 'react';
 import styled from "styled-components"
 import {Link} from 'react-router-dom'
 //import {ProductConsumer} from '../context'
 import PropTypes from 'prop-types'

export default class Product extends Component {
    render() {
        const { id, img, price, inCart} = this.props.product;
        console.log(this.props.product);
        return (
        <ProductWrapper className = "col-9 mx-auto col-md-6 col-lg-3 my-3">
            <div className = "card">
                       
                <div className = "img-container p-5" onClick={() => console.log("you clicked myImg")}>                 
                  <Link to="/details">
                     <img src={img} alt="product" className="card-img-top"/>
                  </Link>
                </div> 
                    
            </div>     
        </ProductWrapper>
            );
       }
    }
   Product.propTypes = {
    product:PropTypes.shape({
        id:PropTypes.number,
        img:PropTypes.string,
        title:PropTypes.string,
        price:PropTypes.number,
        inCart:PropTypes.bool
    }).isRequired
};
const ProductWrapper = styled.div`
 .card{
     border-color:"transparent";
     transition:all 1s linear;
 }
 .card-footer{
     background:transparent;
     border-top:transparent;
 }
 &:hover{
     .card{
         border:0.04rem solid rgba(0,0,0,0.2)
         box-shadow:2px 2px 5px 0 rgba(0,0,0,0.02)
     }
     .card-footer{
         background:rgba(247,247,247)
     }
 }
 .img-container{
     position:relative;
     overflow:hidden
 }
 .card-img-top{
     transition:all 1s linear;
 }
 .img-container:hover .card-img-top{
     transform:scale(1.2);
 }
 .cart-btn{
     position:absolute;
     bottom:0;
     right:0;
     paddoing:0.2rem 0.4rem
     background:var(--lightBlue);
     border:none;
     color:var(--mainWhite);
     border-radius:0.5rem 0 0 0;
     transform:translate(100%, 100%)
     transition:all 1s linear
 }
 .img-container:hover .cart-btn{
     transform:translate(0,0)
 }
 .cart-btn:hover{
     color:var(--mainBlue);
     cursor:pointer
 }
`
    
