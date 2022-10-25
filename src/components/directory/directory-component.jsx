import  CategoryItem from "../category-item/category-item.component";
import './directory-component.css';

const Directory = ({cat})=>{
  return(
    <div className="categories-container">
      {cat.map((cat)=>(
        <CategoryItem key={cat.id} cat={cat} />
      ))}
    </div>
  );
}

export default Directory;