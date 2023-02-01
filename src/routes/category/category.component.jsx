import { useParams } from 'react-router-dom';
import { Fragment, useContext,useEffect,useState} from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import ProductCard from '../../components/product-card/product-card.component';


import './category-component.styles.css'

const Category=()=>{
    const {category} = useParams();
    const {categoriesMap} = useContext(CategoriesContext);
    const [products,setProducts] = useState([]);

    useEffect(()=>{
        setProducts(categoriesMap[category])
    },[category,categoriesMap])

    return(
        <Fragment>
        <h2 className='title'>{category.toUpperCase()}</h2>
        <div className='category-prev-container'>
            
            { products &&
                products.map((product)=>
                    <ProductCard product={product} key={product.id}/>)
            }
        </div>

        </Fragment>

    );

}

export default Category;