import { useNavigate } from 'react-router-dom';

import {CategoryContainer,Body,BackgroundImage} from './category-item.comoponent.styles.jsx'

const CategoryItem =({cat})=>{
    const {id,title,imageUrl,route} = cat;
    const navigate = useNavigate();


    const onNavHandler = ()=> navigate(route);
    return(
        
        <CategoryContainer key={id} onClick={onNavHandler}> 
        <BackgroundImage imageUrl={imageUrl}/>
        <Body>
          <h2>{title}</h2>
          <p>Shop now</p>
        </Body>
      </CategoryContainer>
    );
}

export default CategoryItem;