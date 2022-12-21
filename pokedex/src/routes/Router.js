import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "../pages/home/Home"
import Details from "../pages/details/Details"
import Pokedex from "../pages/pokedex/Pokedex"

const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/details" element={<Details />} />
                    <Route path="/pokedex" element={<Pokedex />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router
