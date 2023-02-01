import styled from "styled-components";

import {ReactComponent as ShoppingSvg} from '../../assets/shopping-bag.svg'

export const ShopingIcon = styled(ShoppingSvg)`
    width: 24px;
    height: 20px;
`

export const CartIconCont = styled.div`
    width: 30px;
    height: 40px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

`




export const ItemCount = styled.div`
    position: absolute;
    font-size: 10px;
    font-weight: bold;
    bottom: 12px;


`




// .cart-icon-container {
//     width: 30px;
//     height: 40px;
//     position: relative;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     cursor: pointer;
//   }
//   .cart-icon-container .shopping-icon {
//     width: 24px;
//     height: 20px;
    
//   }
//   .cart-icon-container .item-count {
//     position: absolute;
//     font-size: 10px;
//     font-weight: bold;
//     bottom: 12px;

// }
  