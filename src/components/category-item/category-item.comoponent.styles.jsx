import styled from "styled-components";


export const CategoryContainer = styled.div`
    min-width: 30%;
    height: 240px;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    margin: 0 7.5px 15px;
    overflow: hidden;
    &:hover{
      cursor: pointer;
    }

    large{
      height: 380px;
    }
    :first-child{
      margin-right: 7.5px;
    }
    :last-child {
      margin-left: 7.5px;
    }

`

export const Body = styled.div`
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    background-color: white;
    opacity: 0.7;
    position: absolute;

    h2{
      font-weight: bold;
      margin: 0 6px 0;
      font-size: 22px;
      color: #4a4a4a;
    }

    p{
      font-weight: lighter;
      font-size: 16px;
    }

    &:hover{
      opacity: 0.9;
    }

`

export const BackgroundImage = styled.div`

    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-image: ${({imageUrl}) => `url(${imageUrl})`};
    &:hover{
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

`











// .category-container {
//     min-width: 30%;
//     height: 240px;
//     flex: 1 1 auto;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     border: 1px solid black;
//     margin: 0 7.5px 15px;
//     overflow: hidden;
//   }
  // .category-container:hover {
  //   cursor: pointer;
  // }
  // .category-container:hover .background-image {
  //   transform: scale(1.1);
  //   transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  // }
  // .category-container:hover .category-body-container {
  //   opacity: 0.9;
  // }
  // .category-container.large {
  //   height: 380px;
  // }
  // .category-container:first-child {
  //   margin-right: 7.5px;
  // }
  // .category-container:last-child {
  //   margin-left: 7.5px;
  // }
  // .category-container .background-image {
  //   width: 100%;
  //   height: 100%;
  //   background-size: cover;
  //   background-position: center;
  // }
  // .category-container .category-body-container {
  //   height: 90px;
  //   padding: 0 25px;
  //   display: flex;
  //   flex-direction: column;
  //   align-items: center;
  //   justify-content: center;
  //   border: 1px solid black;
  //   background-color: white;
  //   opacity: 0.7;
  //   position: absolute;
  // }
  // .category-container .category-body-container h2 {
  //   font-weight: bold;
  //   margin: 0 6px 0;
  //   font-size: 22px;
  //   color: #4a4a4a;
  // }
  // .category-container .category-body-container p {
  //   font-weight: lighter;
  //   font-size: 16px;
  // }
  