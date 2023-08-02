import electronics from "../images/hisensee.png";

function CategoryBanner({name, image}) {
    
  return (
    <div className="category-banner">
      <img src={image} alt="" />&thinsp;
      <h3>{ name} </h3>
    </div>
  );
}

export default CategoryBanner;
