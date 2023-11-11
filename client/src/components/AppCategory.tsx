import React, {useContext, useEffect, useState} from "react"
import CategoryList from "./CategoryList";
import "../CSS/AppCategory.css"
import {BookItem, categories, categoryListItem, initialCartState, name} from "../types";
import BookItemCarousel from "./BookItemCarousel";
import {useParams} from "react-router";
import axios from "axios";
import {Category} from "../contexts/CategoryContext";

function AppCategory(props: name){
    const [books, setBooks] = useState([]);
    const {paramName:paraName} = useParams<{paramName:string}>();
    const categoryName = paraName || props.name
    let link: string = "";
    if(categoryName === "top-rated"){
         link = 'books/top-rated'
    }else{
        link = 'categories/name/'+categoryName+'/books'
    }
    useEffect(() => {
        axios.get(link)
            .then((result) => setBooks(result.data))
            .catch(console.error);
    },[link, categoryName]);
    return (
        <main className="body">
            <div className="category-main">
                <CategoryList />
                <div className="category-grid">
                    {
                        books.map((book:BookItem) =>(
                            <BookItemCarousel key={book.bookId} bookId={book.bookId} title={book.title} author={book.author} price={book.price} isPublic={book.isPublic} imgu={book.bookId+".jpg"} />
                        ))
                    }
                </div>
            </div>
        </main>
    );
}
export default AppCategory;