import './shop.styles.css'
import {Routes,Route} from 'react-router-dom';
import CategoriesPrev from '../categories-preview/categories.component';
import Category from '../category/category.component';

const Shop = ()  =>{
    
    return(
       <Routes>
            <Route index element={<CategoriesPrev />} />
            <Route path=':category' index element={<Category />} />
       </Routes>

    );
}
      
export default Shop;