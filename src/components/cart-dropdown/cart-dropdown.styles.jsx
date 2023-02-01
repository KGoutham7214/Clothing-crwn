import styled from "styled-components";


import {BaseButton,GoogleSignInButton,InvertedButton} from '../Button/button-component.styles.jsx'


export const CartDropDownContainer = styled.div`

    position: absolute;
    width: 280px;
    height: 380px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;

    ${BaseButton},${GoogleSignInButton},${InvertedButton} {
      margin-top: auto;
    }


`

export const EmptyMessage = styled.div`
    font-size: 18px;
    margin: 50px auto;


`

export const CartItems = styled.div`

    height: 340px;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
`




// .cart-dropdown-container {
//     position: absolute;
//     width: 280px;
//     height: 380px;
//     display: flex;
//     flex-direction: column;
//     padding: 20px;
//     border: 1px solid black;
//     background-color: white;
//     top: 90px;
//     right: 40px;
//     z-index: 5;
//   }
//   .cart-dropdown-container .empty-message {
//     font-size: 18px;
//     margin: 50px auto;
//   }
//   .cart-dropdown-container .cart-items {
//     height: 340px;
//     display: flex;
//     flex-direction: column;
//     overflow-y: scroll;
//   }
//   .cart-dropdown-container button {
//     margin-top: auto;
//   }
  