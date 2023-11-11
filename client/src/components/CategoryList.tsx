import React, {useContext} from "react"
import { Link } from "react-router-dom";
import {categories, categoryListItem} from "../types";
import {Category} from "../contexts/CategoryContext";

function CategoryList(){
    const categories = useContext<categoryListItem[]>(Category);  // add this statment

    let presentSection = window.location.href.replaceAll('%20',' ').split('/').at(-1);
    if(presentSection === 'categories'){
        presentSection = 'Fiction'
    }
    console.log(presentSection);
    return (
        <div className="category-menu">
            <h3> All Categories</h3>
            {
                categories.map((category:categoryListItem,index)=>(
            <div className={presentSection === category.name ? "category-item cat-active": "category-item"} id={category.categoryId+""}  key={category.categoryId}>
                <Link to={"/categories/"+category.name}><span>{category.name}</span><span className="fa-solid fa-angle-right" /> </Link>
            </div>))
        }
        <div className={presentSection === 'top-rated' ? "category-item cat-active": "category-item"}  id={"top-rated"}>
            <Link to={"/categories/top-rated"}><span>Top Rated Books</span><span className="fa-solid fa-angle-right" /> </Link>
        </div>
        </div>
    );
}
export default CategoryList;
