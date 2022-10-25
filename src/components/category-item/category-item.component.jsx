import './category-item.css'

const CategoryItem =({cat})=>{
    const {id,title,imageUrl} = cat;
    return(
        
        <div key={id} className="category-container"> 
        <div className="background-image" style={{
          backgroundImage:`url(${imageUrl})`
        }}/>
        <div className="category-body-container">
          <h2>{title}</h2>
          <p>Shop now</p>
        </div>
      </div>
    );
}

export default CategoryItem;