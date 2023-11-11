import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import SearchBox from "./searchbox";
import {categories, categoryListItem} from "../types";
import {Category} from "../contexts/CategoryContext";

const NavigationBar = () => {
    const [searchResults, setSearchResults] = useState([]);
    const handleSearch = (searchTerm:String) => {
        console.log(searchTerm);
    };
    const categories = useContext<categoryListItem[]>(Category);  // add this statment

    return (
        <div className="navbar">
            <div className="search-bar">
                <SearchBox onSearch={handleSearch}/>
            </div>
            <div className="dropdown primary-color-text">
                <Link to="/categories">Categories <i className="fa-solid fa-angle-down"></i></Link>
                <div className="dropdown-content">
                    {categories.map((item,index) => (
                    <Link to={"categories/"+item.name} key={item.categoryId}>{item.name}</Link>
                    ))}
                </div>
            </div>
            <div>
                <Link to="/ebooks" className="ebooks-link">Ebooks</Link>
            </div>
            <div>
                <button className="login-button">Login</button>
            </div>
        </div>
    );
};

export default NavigationBar;
