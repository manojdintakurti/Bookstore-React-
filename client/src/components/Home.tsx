import React, {useEffect, useState} from "react"
import "../CSS/Home.css"
import HomeBookSlide from "./HomeBookSlide";
import { Link } from "react-router-dom";
import axios from "axios";
import {BookItem} from "../types";

function Home(){
    const [bestSellers, setBestSellers]  = useState([]);
    useEffect(() => {
        axios.get('categories/name/humour/suggested-books?limit=4')
            .then((result) => setBestSellers(result.data ))
            .catch(console.error);
    }, []);
    return (
        <div className="home-container">
            <div className="home-carousel">
                <div className="banner-container">
                    <div className="banner">
                        <img
                            src={require("../images/banner-1.jpg")}
                             alt="Banner 1"
                        />
                        <img
                            src={require("../images/banner-2.jpg")}
                            alt="Banner 2"
                        />
                        <img
                            src={require("../images/banner-3.png")}
                            alt="Banner 3"
                        />
                        <img
                            src={require("../images/banner-2.jpg")}
                            alt="Banner 2"
                        />
                        <img
                            src={require("../images/banner-1.jpg")}
                            alt="Banner 2"
                        />
                        <img
                            src={require("../images/banner-3.png")}
                            alt="Banner 3"
                        />
                    </div>
                    <Link to="/categories" className="ctc-button">Shop Now</Link>
                    <div className="banner-marker">
                        <span className="marker"></span>
                        <span className="marker"></span>
                        <span className="marker"></span>
                        <span className="marker"></span>
                        <span className="marker"></span>
                    </div>
                </div>
            </div>
            <div className="best-sellers">
                <div className="best-sellers-title">
                    <h3>Best Sellers</h3>
                    <Link to="/best-sellers" className="view-all">View All</Link>
                </div>
                <div className="best-sellers-items">
                    <div className="carousel-container">
                        {
                            bestSellers.map((book:BookItem) =>(
                                <HomeBookSlide key={book.bookId} bookId={book.bookId} title={book.title} author={book.author} price={book.price} isPublic={book.isPublic} imgu={book.bookId+".jpg"}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;