import {createContext, ReactNode, useEffect, useState} from "react";
import {categoryListItem} from "../types";
import axios from "axios";

export const Category  = createContext<categoryListItem[] | []>([]);
Category.displayName = 'CategoryContext';

interface CategoryContextProps {
    children: ReactNode;
}
function CategoryContext ({ children }:CategoryContextProps)  {
    const [categories, setCategories]  = useState([]);
    useEffect(() => {
        axios.get('categories')
            .then((result) => setCategories(result.data ))
            .catch(console.error);
    }, []);
    return (
        <Category.Provider value ={categories}>{children}</Category.Provider>
    );
}
export default CategoryContext;