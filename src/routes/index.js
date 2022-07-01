import React from 'react'
import {
    Routes,
    Route,
} from "react-router-dom";
import Home from "../views/home/index.js";
import Products from "../views/products/index";

function index() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
            </Routes>
        </div>
    )
}

export default index